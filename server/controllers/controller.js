//====CRUD====
// import the model to make queries to the DB
const Pet = require("../models/pet")
module.exports = {
    //READ ALL
    findAll: (req, res) => {
        Pet.find().sort({"type" : 1})  //sort by type
            .then(allDaPets => {
                console.log(allDaPets.length)
                res.json(allDaPets)
            })
            .catch(err => res.json(err))
    },

    //CREATE
    create: (req, res) => {
        console.log(req.body);
        Pet.create(req.body)
            .then(newPet => {
                res.json(newPet)
            })
            // status 400 means trigger react client .catch// client error
            // .catch(err => res.status(400).json({message: "SERVER ERROR", err}))
            .catch(err => res.status(400).json(err))
    },

    //READ ONE
    findOne: (req, res) => {
        console.log(req.params.id)
        // Pet.find({_id: req.params.id})
        Pet.findById(req.params.id)    ///using findById
            .then(onePet => res.json(onePet))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        // Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators: true})
        Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedPet => res.json(updatedPet))
            .catch(err => res.status(400).json(err))
    },

    //DELETE
    delete: (req,res) => {
        console.log(req.params.id)
        Pet.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }


}