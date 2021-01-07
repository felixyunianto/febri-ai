const express = require('express');
const mainRouter = express.Router();

const welcomeRouter = require('./welcome');
const verifyRouter = require('./verify');

const upload = require('../helpers/upload');

mainRouter.use("/",  welcomeRouter);
mainRouter.use("/verify", upload, verifyRouter);

module.exports = mainRouter;