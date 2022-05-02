var express = require("express");
var fs = require("fs");
var path = require("path");
var requests = require("requests");

app = express()

app.listen(8000, function(req, res) {
    console.log("We are listening on port 8000...");
})

app.set('view engine', 'hbs')

app.get("/", function(req, res) {




    //fatch the api from the web and we make a query string in this
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=8967fcf9a02b3f51041b66e12b1724dd`)


    //Stream the data from the api
    .on('data', function(chunk) {

            // change the json to javascript object
            var data = JSON.parse(chunk);

            //change the data from javascript object to array
            var data1 = [data];
            //get the data from array 
            res.render('index1', {
                    datat: data1[0].main.temp
                })
                // res.send(data1[0].main);
        })
        .on('end', function(err) {
            if (err) return console.log("There may be a issue in the code", err);
        })
    console.log('success....')
});

// app.get("*", function(req, res) {
//     app.send("404 not found")
// })