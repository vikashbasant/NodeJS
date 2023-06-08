const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// here model signify the collection contact:
const Contact = mongoose.model('Contact', contactSchema);

// finally we want to export this:
module.exports = Contact;