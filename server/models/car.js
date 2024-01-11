// import the mongoose lib
const mongoose = require("mongoose")

// the Car model
const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    brand: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    cathegory: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    condition: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
    },
    running: {
        type: Boolean,
        default: true
        
    },
    rarity: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        enum: {values:["Ordinary","Rare","Jewel"],message:"{PATH} is invalid!"}
    },
    hp: {
        type: Number,
        trim: true,
        required: [true, "{PATH} is required"],
        min:[1,"{VALUE} is less than 1 hp"]

    },
    maxSpeed: {
        type: Number,
        required: [true, "{PATH} is required"],
        integer: true,
        trim: true,
    },
    year: {
        type: Number,
        required: [true, "{PATH} is required"],

        trim: true,
    },

    city : {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    interiorColor : {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    exteriorColor : {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    photos : {
        type: [String],
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"]
    },
    owner : {type: mongoose.Types.ObjectId, ref: "User"}

},
    { timestamps: true },
);
const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
