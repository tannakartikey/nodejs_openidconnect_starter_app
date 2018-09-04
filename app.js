
const http = require("http");
const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();
const port = process.env.PORT || 8003;
const passport = require("passport");
const flash = require("connect-flash");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

const config = require("./config");

//const mongoose = require("mongoose");
//mongoose.connect(config.mongoUrl, { useMongoClient: true });

//require("./app/passport-mongodb")(passport);      // pick one
require("./app/passport-sqlite")(passport);

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

const hs = http.createServer({}, app);

hs.listen(port);
