const net = require('net');
const { Hub } = require('./core/Hub.js');

var server = net.createServer();

Hub.create();
Hub.loadEndpoints();

server.on("connection", (socket) => {
    socket.setEncoding("utf8");

    socket.on('data', (data) => {
        Hub.process(data,socket);
    })

});

server.on('error', (err) => {
    console.log("ERROR : " + err);
})

server.listen(8300, 'localhost', () => {
    console.log("Server listening on port : " + server.address().port + '\n');
});