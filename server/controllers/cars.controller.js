// the controller does the C R U D for DB

const mongoose = require("mongoose");
const Car = require("../models/car");

// console.log(Car)

//  READ ALL Car
module.exports.findAllCars = (req, res) => {
    Car.find()
        .then((cars) => {
            res.json(cars);
        })
        .catch((err) => res.json(err));
};
// Read One By ID
module.exports.findOneCar = (req, res) => {
    Car.findOne({ _id: req.params.id })
        .then(oneCar => {
            res.json(oneCar);
        })
        .catch((err) => res.json(err));
}
// CREATE
module.exports.createNewCar = (req, res) => {
    Car.create(req.body)
        .then((newlyCreatedCar) => {
            res.json(newlyCreatedCar)
        })
        .catch((err) => res.status(400).json(err));
}
// UPDATE
module.exports.updateExistingCar = (req, res) => {
    Car.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateCar) => {
            res.json(updateCar)
        })
        .catch((err) => res.status(400).json(err));
};

// DELETE   
module.exports.DeleteOneCar = (req, res) => {
    Car.deleteOne({ _id: req.params.id })
        .then((deletedCar) => {
            res.json(deletedCar)
        })
        .catch((err) => res.json(err));
};


// Count ALL Car
module.exports.countAllCars = (req, res) => {
    Car.find().count()
        .then((count) => {
            res.json(count);
        })
        .catch((err) => res.json(err));
};