const express = require('express');
const verifyRouter = express.Router();
const verifyController = require('../controllers/verify');

verifyRouter.get('/', verifyController.getVerify);
verifyRouter.post('/', verifyController.postVerify);

module.exports = verifyRouter;