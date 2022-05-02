let mongoose = require('mongoose')
let fs = require('fs')
let path = require('path')
let validator = require('validator')
let express = require('express')
const { toUnicode } = require('punycode')

app = express()

mongoose.connect("mongodb://localhost:27017/srldrug", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() { console.log('connected'); })
    .catch(function(err) { console.log('connect error....') });

// Schema validation
let LoginSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        require: true,
        unique: true,

    },
    Lastname: {
        type: String,
        require: true,

    },

    phone: {
        type: Number,
        min: [10, "This is a invalid no."],
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("this is invalid Phone No.");
            }
        }
    },

    email: {
        type: String,
        require: true,
        max: [50, "This is a invalid email"],
        //This is how we use a npm validator works
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("this is a invalid email");
            }
        }
    },

})


const Login = new mongoose.model('Login', LoginSchema);


    let createdoc = async function() {

        try {
            let Paras = new Login({
                Firstname: "Mani",
                Lastname: "Lohiaa",
                phone: 9927045094,
                email: "manilohia@gmail.com"

            })

            let go = await Paras.save();
            console.log(go);
        } catch (err) {

            console.log(err);

        }
    }


createdoc()