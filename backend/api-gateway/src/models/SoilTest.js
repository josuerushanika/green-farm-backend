const mongoose = require("mongoose");

const SoilTestSchema = new mongoose.Schema({
    userId: String,
    nitrogen: Number,
    phosphorus: Number,
    potassium: Number,
    ph: Number,
    soilType: String,
    location: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SoilTest", SoilTestSchema);
