const mongoose = require("mongoose")
const validator = require("validator")

// Define model 

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error ("age must be positive")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error ("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        minLength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error ("The password includes the word password")
            }
        }
    }

})

module.exports = User 