const express = require("express");
require("dotenv").config();

const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
let PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

require("./routes/html-routes.js")(app);
require("./routes/form-route.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
