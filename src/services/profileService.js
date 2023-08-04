const depositById = async (req) => {
    const sequelize = req.app.get('sequelize');
    const {Profile, Contract, Job } = req.app.get('models');

    const {userId} = req.params;
    const {amount} = req.body;

    if (!amount) return {success: false, message: "request doest not have amount"};

    const totalUnpaidAmount = await Job.sum('price', {
      where: {
          paid: null
      },
      include: [
          {
              model: Contract,
              where: { 
               status: 'in_progress' ,             
               ClientId: userId,
            },
          }
      ]
  });
  const maxDeposit = totalUnpaidAmount / 4;

  if (amount >= maxDeposit) return {success: false, message: "Cannot deposit more than 25% your total of jobs to pay"};
  await Profile.update(
    { balance: sequelize.literal(`balance + ${amount}`) },
    {  where: { id: userId } },
  );
  return {success: true, message: "amount added succuesfully to client balance"}
  };
  
  module.exports = {
    depositById,
  };
  