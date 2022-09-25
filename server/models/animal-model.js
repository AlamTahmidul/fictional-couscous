const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema(
    {
        type: { type: String, required: true },
        breed: { type: String },
        name: { type: String, required: true },
        age: { type: Number },
        sex: { type: String },
        description: { type: String, required: true },
        vaccines: { type: [String] },
        handlerID: { type: Number },
        images: { type: [String] }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Animal', AnimalSchema);