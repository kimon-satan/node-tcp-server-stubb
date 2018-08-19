/* TCP server*/

const HOST = '127.0.0.1';
const TCP_PORT = 6969;
var net = require('net');

//do this is the main app

net.createServer(function(sock) 
{

		// We have a connection - a socket object is assigned to the connection automatically
		console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

		// Add a 'data' event handler to this instance of socket
		sock.on('data', function(data)
		{
			data = JSON.parse(data.toString());
			console.log(data);
			var r = {address: "/response", args: [0,1,2,3]};
			sock.write(JSON.stringify(r));
		});

		// Add a 'close' event handler to this instance of socket
		sock.on('close', function(data)
		{
			console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
		});

}).listen(TCP_PORT, HOST);

console.log('TCP server listening on ' + HOST +':'+ TCP_PORT);
