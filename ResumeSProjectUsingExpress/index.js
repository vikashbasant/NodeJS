const express = require('express');
const fs = require('fs');
const port = 8001;

const app = express();


app.get('/', function(req, res){
    return res.end('./index.html');
});
app.listen(port, function(err){
    if(err){ console.log('Error in running the server', err);}
    console.log('Yup! My Express Server is running on Port:', port);
});