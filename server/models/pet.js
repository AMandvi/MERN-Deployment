//import mongoose to build model
const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 char long"]
    },
    type:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 char long"]
    },
    description:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 char long"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    }
    
}, {timestamps:true})

//create the schema and export it
const Pet = mongoose.model("Pet", PetSchema)

//export the model
module.exports = Pet;

