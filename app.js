var express         = require("express");
var app             = express();
var mongoose        = require("mongoose");
var bodyParser      = require("body-parser");
var morgan          = require("morgan");
const config =  require('./config/database');

// configuration
mongoose.connect(config.database);

// template engine
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/../client/views");

// use
app.use(express.static("../public"));
app.use(express.static("../angular-src/src/app"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));


// =================================================
//                      Routes
// =================================================

// Route handler for www requests
app.get('/*', function(req, res, next) {
    if (req.headers.host.match(/^www/) !== null ) {
        res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
    } else {
        next();     
    }
});

app.use("/", require("./routes"));
//app.use("/test", require("./routes/testUser"));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening on " + host + " " + port);
});


//////////////////

/* const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config =  require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('connected to database '+config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('database error '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3300;

//CORS Middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Midleware
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('invalid Endpoint');
});

app.listen(port, () => {
    console.log('server started at port '+port);
}); */