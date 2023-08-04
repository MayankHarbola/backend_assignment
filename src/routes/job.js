const express = require('express');
const router = express.Router();

const { getAllUnpaidJobs, payJob } = require('../controller/job');
const { getProfile } = require('../middleware/getProfile');


router.get('/unpaid', getProfile, getAllUnpaidJobs);
router.post('/:job_id/pay', getProfile, payJob);

module.exports = router;
