const app = require('./app');
const http = require('http');
const port = 3000;

app.set('port', port)
const server = http.createServer(app)

server.listen(port, (err) => {
	if(err) return console.log(err)
	console.log('Server is running on port ' + port);
})