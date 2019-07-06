const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const FilmsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

const Films = mongoose.model('Films', FilmsSchema);
module.exports = Films;