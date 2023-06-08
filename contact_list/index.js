// import the module of 'express'
const express = require('express');
// path is a inbulit module into NodeJS
const path = require('path');
const port = 8000;

// include our file when me firing my server:
const db = require('./config/mongoose');
// impot the contact module:
const Contact = require('./models/contact');

// We need to fire up the express:
const app = express();

// setup our ejs in our express 'app':
app.set('view engine', 'ejs');
// where need to place our views:
app.set('views', path.join(__dirname, 'views'));
// this used signifed middleWare:
app.use(express.urlencoded());
// Accessing our static files:
app.use(express.static('asets'));



// // Create Own MiddleWare1:
// app.use(function(req, res, next){
//     req.myName="Vikash";
//     // console.log('middleware 1 called');
//     // next does is it passes on what have been changes to next middleware.
//     next();
// });

// // Create Own MiddleWare2:
// app.use(function(req, res, next){
//     console.log('My Name from MW2', req.myName);
//     // console.log('middleware 2 called');
//     next();
// });


var contactList = [
    {
        name: "vikash",
        phone: "0000000000"
    },
    {
        name: "kumar",
        phone: "1111111111"
    },
    {
        name: "Basant",
        phone: "2222222222"
    }
]
app.get('/', function (req, res){
    // console.log('from the get route controller', req.myName);
    
    // First we will fetch the contact:
    Contact.find({}, function(err, contacts){
        if (err){
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home', {
            title: "Contacts List",
            // contact_list: Is naming convention followed by json object
            // contactList: Is naming convention followed by javascript.
            contact_list: contacts
        });
    });   
    // return res.render('home', {
    //     title: "Contacts List",
    //     // contact_list: Is naming convention followed by json object
    //     // contactList: Is naming convention followed by javascript.
    //     contact_list: contactList
    // });
});  

app.get('/practice', function(req, res){
    return res.render('practice', {
        title : "Let us play with ejs"
    });
});


app.post('/create-contact', function(req, res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    // return res.redirect('/');
    /*-----------Another Method----------*/
    // contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if (err){console.log('error in creating a contact!'); 
        return;}

        console.log('*********', newContact);
        return res.redirect('back');
    });
    // By this line coming back to same page 
    // return res.redirect('back');
});


// // For deleting a contact
// app.get('/delete-contact', function(req, res){
//     // console.log(req.query);

//     // get the query from the url:
//     let phone = req.query.phone;

//     // Now check the phone present in the contactList If yes then simply return that index otherwise retun -1:
//     let contactIndex = contactList.findIndex(contact => contact.phone == phone);

//     // If contactIndex is not equal to -1 then simply means that contact is present in the contactList then simply delete that contact from the contactList:
//     if(contactIndex != -1){
//         contactList.splice(contactIndex, 1);
//     }
//     // After delete the contact from the contactList then page reder same page again.
//     return res.redirect('back');


// });


// For deleting a contact
app.get('/delete-contact', function(req, res){
    
    // get the id from query in the url:
    let id = req.query.id;

    // find the contact in the database using id and delete:
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    });
});


// We need the start the server:  
app.listen(port, function(err){
    if(err){ console.log('Error in running the server', err);}

    console.log('Yup! My Express Server is running on Port:', port);
});