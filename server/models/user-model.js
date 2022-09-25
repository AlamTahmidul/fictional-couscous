const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema(
    {
        first: { type: String, required: true },
        last: { type: String, required: true },
        email: { type: String, required: true },
        location: {type: String},
        passwordHash: { type: String, required: true },
        interests: [{type: ObjectId, ref: 'Animal'}]
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);