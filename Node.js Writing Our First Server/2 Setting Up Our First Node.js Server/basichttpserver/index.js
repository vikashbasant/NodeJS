//http is the module of Node js:
const http = require('http');
const port = 8000;
// fs is the module in NodeJs,fs is reading & writing from the file...
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    
    let filePath;

    switch (req.url){
        case '/':
            filePath = './index.html';
            break;
        
        case '/profile':
            filePath = './profile.html';
            break;

        default:
            filePath = './404.html';
    }

    // this function will read the file from filePath
    // filePath: It is nothing but location of the file will store
    // data: content of the file is present
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error!</h1>')
        }
        return res.end(data);
    })

}

// this is the syntax of create server in the NodeJS
const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on port: ", port);
});


// localhost == 127.0.0.1 both are same.