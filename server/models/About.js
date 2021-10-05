const mongoose = require('mongoose');

const { Schema } = mongoose;

const aboutSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    keyword: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String
    }
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;