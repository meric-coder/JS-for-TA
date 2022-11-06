 // Task 1

/*
const http = require('http');
const path = require('path');
const os = require('os');

http.createServer(function(request,response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h2>System information</h2>");
     response.end(`
     <h4>Current user name:  ${os.userInfo().username}</h4>
     <h4>OS Type - ${os.type()}</h4>
     <h4>System work time: ${(os.uptime()/60).toFixed(2)} minutes</h4>
     <h4>Current work directory: ${path.dirname(__filename)}</h4>
     <h4>Server file name: ${path.basename(__filename)}</h4>
     `) 
    
}).listen(5000);

console.log('Server is running at http://127.0.0.1:5000');

*/

// Task 2

const http = require('http');
const path = require('path');
const os = require('os');
const greeting = require("./personalModule.js");

http.createServer(function(request,response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    let username = os.userInfo().username;
    response.write(`Date of request: ${greeting.date}<br>`);
    response.write(greeting.showMessage(username));

    response.end();

}).listen(5000);

console.log('Server is running at http://127.0.0.1:5000');








