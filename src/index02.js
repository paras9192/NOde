// use the required modules 
var express = require('express');
var path = require('path');
var hbs = require('hbs');
var app = express();



//create the server
app.listen('3000', function(req, res) {
    console.log('Port 3000 is running........')
})

// We add a directory path which we use in whole app
app.use(express.static(path.join(__dirname, '/views')));

//set the hbs
app.set("view engine", "hbs")

//render and add dynamic constant in the html file
app.get("/", function(req, res) {
    res.render("index");
})

// Make a aboutus page
app.get('/about', function(req, res) {
    res.render("aboutus");
    // res.send("welcome")
})

// We use * to create a error page in the website
app.get("*", function(req, res) {
    res.send("404 Error")
})

// app.get("about", function(req, res) {
//     res.render("aboutus");
// })