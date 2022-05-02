const hbs = require('hbs');
let mongoose = require('mongoose');


// Connect to a mongo and create a db
mongoose.connect("mongodb://localhost:27017/paras", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() { console.log('connected'); })
    .catch(function(err) { console.log('connect error....') });


// Make a schema means the stucture of the document in the collection
let playlistSchema = new mongoose.Schema({
    Med: String,
    Salt: String,
    Buyer: String,
    Seller: String,
    Buy: Boolean,
})

// Make a model means make a new collection
const Playlist = new mongoose.model('Playlist', playlistSchema);

// This method is used to make a new collection in Mongo
let createdoc = async function() {

    try {
        let Med = new Playlist({
            Med: "Sanimol",
            Salt: "Paracitamol",
            Buyer: "whole world",
            Seller: "KKC Associates",
            Buy: true,
        })

        let go = await Med.save();
        console.log(go);
    } catch (err) {

        console.log(err);

    }
}


//createdoc();


let manydoc = async function() {
    try {
        let Med = new Playlist({
            Med: "Sanimol",
            Salt: "Paracitamol",
            Buyer: "whole world",
            Seller: "KKC Associates",
            Buy: true,
        })
        let lecet = new Playlist({
            Med: "lecet",
            Salt: "Paracitamol",
            Buyer: "whole world",
            Seller: "KKC Associates",
            Buy: true,
        })
        let bector = new Playlist({
            Med: "Bector-o+",
            Salt: "Paracitamol",
            Buyer: "whole world",
            Seller: "KKC Associates",
            Buy: true,
        })
        let fixi = new Playlist({
                Med: "fixi-200",
                Salt: "Paracitamol",
                Buyer: "whole world",
                Seller: "KKC Associates",
                Buy: true,
            })
            //This function is used to insertmany doc in the collection
        let go = await Playlist.insertMany([Med, lecet, bector, fixi]);
        console.log(go);
    } catch (err) {
        console.log(err);
    }



}

//manydoc();



// let readdoc = async function() {
//     try {

//         let read = await Playlist.find({ Med })
//         console.log(read)
//     } catch (err) {
//         console.log(err);
//     }
// }