let express = require('express')
let path = require('path')
let fs = require('fs')

app = express()

app.listen('3000', function(req, res) {
    console.log("Listening to port no.3000")
})

// app.set("view engine", 'hbs')

app.get("/", function(req, res) {

    //read the file which contain the data of json or api
    fs.readFile('userapi.json', 'utf8', function(err, data) {

        //Change the data from json to object to use the property of objects
        let data1 = JSON.parse(data)
        res.send(data1.name)
    })
})