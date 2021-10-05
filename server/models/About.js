const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
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

const About = mongoose.model('About', productSchema);

module.exports = About;