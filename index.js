const express = require('express')
const TeachableMachine = require("@sashido/teachablemachine-node");

const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

const mainRouter = require("./src/routes/index");

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use("/", mainRouter);