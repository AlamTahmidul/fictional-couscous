const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema(
    {
        name: { type: String, required: true },
        breed: { type: String, required: true },
        vaccines: { type: [String], required: true },
        age: { type: Number, required: true },
        description: { type: String, required: true },
        handler: { type: String, required: true },
        images: { type: [String] },
        views: {type: Number},
    },
    { timestamps: true }
);

module.exports = mongoose.model('Animal', AnimalSchema);