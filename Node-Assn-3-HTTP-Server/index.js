const http = require('http');
const fs = require('fs'); 
const port = 5000;

const server = http.createServer(function(request, response ){
    fs.writeFile('index.html',"<div><h1>Hello I am Nilanjan</h1></div>",(err)=>{console.log(err);})
    response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            response.writeHead(404) // writeHead takes status code
            response.write('Error: File Not Found')
        } else {
            response.write(data);
        }
        response.end();
    })
    // response.write('Hello World');
    // response.end();
})
 
server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong ', error);
    } else {
        console.log('Server is listening on port ' + port)
    }
}) 