// require the library
const mongoose = require('mongoose');

// connect to the database:
mongoose.connect('mongodb://localhost/contacts_list_db');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// If there is an error then print error.
db.on('error', console.error.bind(console, 'error connecting to db'));

// If our database is up/running then print the message.
db.once('open', function() {
    console.log("Successfully connected to the database");
});