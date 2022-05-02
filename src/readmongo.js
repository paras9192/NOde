// Require the mongoose
let mongoose = require('mongoose')

//Connect the node to mongo
mongoose.connect("mongodb://localhost:27017/paras", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() { console.log('connected'); })
    .catch(function(err) { console.log('connect error....') });

//define a schema for the documents
let playlistSchema = new mongoose.Schema({
    Med: {
        type: String,
        // required: true,
        // unique: true,
        // minlength: [2, "this is less than 2 char"],
        // maxlength: [10, "this is greater than 10 char"]
    },

    Salt: {
        type: String,
    },
    Buyer: {
        type: String,
    },
    Seller: {
        type: String,
    },
    Buy: {
        type: Boolean,
    },

})

//Define a collection
const Playlist = new mongoose.model('Playlist', playlistSchema);


// we can read the data from the db.
let readdoc = async function() {
    try {
        // Here we learn about advance queries in mongo as comparison operator and logical operator same as other programming language
        let read = await Playlist.find({
                $or: [{ Salt: "Paracitamol" }, {
                    Buyer: "whole world"
                }]

            })
            //.countDocuments()
            .sort({ Med: 1 })
            .select({ Med: 1 })

        console.log(read)
    } catch (err) {

        console.log(err)
    }
}

// readdoc();

//How to update the document in the db
let updateDocument = async function(_id) {

    try {
        const result = await Playlist.updateOne({ _id: "611dfdcb5bafc157644a266f" }, {
            $set: {
                Med: "Sannfjkj"
            }

        })
        console.log(result)
    } catch (err) {
        console.log(err)
    }

}


//updateDocument("611dfdcb5bafc157644a266f")



//Delete the Document in the db
let deletDocument = async function(_id) {
    try {

        let delet = await Playlist.deleteOne({ _id })
        console.log(delet)


    } catch (err) {
        console.log(err)
    }
}


// deletDocument("611ccf46f9326459ac008a6d")