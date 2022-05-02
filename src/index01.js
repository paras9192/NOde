// import all the required modules
var express = require('express');
var path = require('path');

// make a variable to use express
app = express();


// Make a server on port 8080
app.listen('8080', function(req, res) {
    console.log("listening on port 8080");
})

// app.use(express.static(path.join(__dirname, "public")));


//Routing method to get the file
app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, "../public/public.html"))

})