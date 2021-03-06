var app = require('express')();
var http = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
http.listen(8080, function(){
  console.log('listening on *:8080');
});
