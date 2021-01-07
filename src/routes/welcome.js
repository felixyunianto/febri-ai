const express = require('express');
const welcomeRouter = express.Router();

welcomeRouter.get("/", (req, res) => {
    res.send({
        msg : "Welcome",
        author: "Febri Aji"
    })
})

module.exports = welcomeRouter