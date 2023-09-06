const mongoose = require('mongoose');

const Dataschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    score: {
        type: [Number],
        required: true, // This ensures that the score array is required
        default: [],    // This sets a default empty array for the score field
    }
}, { timestamps: true });

const Data = mongoose.model('Data', Dataschema);
module.exports = Data;
