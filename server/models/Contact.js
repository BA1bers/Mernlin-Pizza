const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        minlength: [10, 'Message must be at least 10 characters.'],
        maxlength: [500, 'Message must be less than 500 characters.']
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;