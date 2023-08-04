const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./model')
const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)

const adminRoutes = require( './routes/admin');
const contractRoutes = require( './routes/contract');
const jobRoutes = require( './routes/job');
const profileRoutes = require( './routes/profile');

app.use('/admin', adminRoutes);
app.use('/contracts', contractRoutes);
app.use('/balances', profileRoutes);
app.use('/jobs', jobRoutes);

/**
 * FIX ME!
 * @returns contract by id
 */
// app.get('/contracts/:id',getProfile ,async (req, res) =>{
//     const {Contract} = req.app.get('models')
//     const {id} = req.params
//     const contract = await Contract.findOne({where: {id}})
//     if(!contract) return res.status(404).end()
//     res.json(contract)
// })
module.exports = app;
