const express = require('express');

const { depositById } = require('../controller/profile');

const profileRoutes = express.Router();

profileRoutes.post('/deposit/:userId', depositById);

module.exports = profileRoutes;
