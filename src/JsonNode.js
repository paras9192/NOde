let fs = require('fs')

//Object in Javascript
let biodata = {
    name: "paras",
    Class: "B.tech",
};


// console.log(biodata.name)

//To convert the data from object to json
var data = JSON.stringify(biodata)


//write or create a file in fs
fs.writeFile('json.json', data, function(err) {
    console.log("done")
});

// To get the data from a fs and remember one thing that always add utf-8 otherwise it will show a buffer files
fs.readFile("json.json", "utf-8", function(err, data) {
    console.log(data)
})