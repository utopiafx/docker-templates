const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const parseArgs = require('minimist');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const args = parseArgs(process.argv.slice(2));
const { name = 'default', port = '8080'} = args;

// Here is the underlying map call public which contains
// the static index file

// IMPORTANT!! note: only use this when testing on local machine and comment it out when 
// using "Dockerfile" or "docker-compose.yml" 
// app.use(express.static(path.join(__dirname, 'public')));

// IMPORTANT!! note: use this when using "Dockerfile" or "docker-compose.yml" or else it won't work!
app.use(express.static("/var/www/html"));


// REST API CALL HERE

app.get('/api/test', (req, res) => {
  res.json({
    headers: req.headers,
    address: req.connection.remoteAddress
  });
});

// Speciall call to /api-another
app.get('/api-another', (req, res) => {
  var msg2 = {
    "message" : "sending from api-another rest CALL",
    "data" : req.query.msg
  };
  
  // Pass a message throw socket for those that listen to messages!
  io.emit('message', msg2);

  // And of course just because this is a rest API call you have to have
  // a response back to the client 
 var msg = {
    "message" : "the message is sent to other clients!"
  };
  // Give a respond message to the client that sent the message
  res.json(msg);   

});

app.get('/api/name', (req, res) => {

  var msg2 = {
    "message" : req.query.msg
  };
  
  // Pass a message throw socket for those that listen to messages!
  io.emit('message', msg2);
  console.log("Message sent to all clients");

  var msg = {
    "message" : "the message is sent to other clients!"
  };
  // Give a respond message to the client that sent the message
  res.json(msg);  
});

/*
app.get('/api/file', (req, res) => {
  fs.readFile(`${__dirname}/version.txt`, 'utf8', (err, version) => {
    res.json({
      version,
      dirname: __dirname,
      cwd: process.cwd()
    });
  });
});
*/

// SOCKET COMMUNICATION HERE

io.on('connection', (sock) => {
  console.log('Client connected');

  // Simple message sent from server
  var msg = {
    "message" : "hello client from server! you are connected now"
  };
  
  // Pass it away to the connected client  
  sock.emit('message', msg);

  sock.on('message', (payload) => {
    payload.message = "another message";
    sock.emit('message', payload);
  });

  sock.on('disconnect', () => {
    console.log('Socket Disconnected');
  });
});

// LISTEN TO PORT

server.listen(+port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err.stack);
    return;
  }

  console.log(`Node [${name}] listens on http://127.0.0.1:${port}.`);
  console.log(__dirname);
  console.log(path.join(__dirname, 'public'));
});