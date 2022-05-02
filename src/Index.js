//import the all required modules
var express = require('express');
app = express();
var path = require('path');



//Running the port server 9000
app.listen(9000, function(req, res) {
    console.log('Express server listening')
})
app.use(express.static(path.join(__dirname, "../public")))

// app.get('/', function(req, res) {
//     res.send("welcome to my page")
// })

// Get the path of the static website
// var staticPath = path.join(__dirname, "../public")
// console.log(staticPath)


//use the staic function to run a static website
// app.use(express.static(path.join(__dirname, "../public")))

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))




//express framework installation and routing
// app.get('/', function(req, res) {
//     res.send("hello world")
// })

// app.get('/home', function(req, res) {
//     res.send({
//         id: "paras",
//         class: "Btech"
//     })
//     res.send("you are on my page")
// })

// app.get('/about', function(req, res) {
//     res.send("you are on about us page")
// })
// app.get('/contact', function(req, res) {
//     res.send("you are on contact us page")
// })
// app.get('/blogs', function(req, res) {
//     res.send("you are on blog page.")
// })

// app.listen(9000, function(req, res) {
//     console.log("listening")
// })

//API get- to get the data from server put- to update the data from the server  del- to delete the data from the server post- to give the req to the server