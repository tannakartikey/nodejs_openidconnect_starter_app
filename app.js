
const https = require("https");
const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();
const port = process.env.PORT || 8003;
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");


const config = require("./config");

mongoose.connect(config.mongoUrl, { useMongoClient: true });

require("./app/passport")(passport);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(session({
    secret: "0d5b1363091af783a5760259a2743205b4efa2d84c0539ef544576ec8a001fc8",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./app/routes.js")(app, passport);

const httpsConfig = {
  ca: fs.readFileSync(__dirname + "/crypto/ca-crt.pem"),
	key: fs.readFileSync(__dirname + "/crypto/server-key.pem"),
	cert: fs.readFileSync(__dirname + "/crypto/server-crt.pem"),
	honorCipherOrder: true,
	NPNProtocols: ["http/1.1", "http/1.0"],
	secureProtocol: "TLSv1_2_method",
	rejectUnauthorized: false
};

const hs = https.Server(httpsConfig, app);

hs.listen(port);
