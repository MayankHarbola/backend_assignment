const express = require('express')
const router = express.Router();

const { getContractById, getAllContracts } = require('../controller/contract');
const { getProfile } = require('../middleware/getProfile');


router.get('/',getProfile, getAllContracts);
router.get('/:id', getProfile, getContractById);

module.exports = router;