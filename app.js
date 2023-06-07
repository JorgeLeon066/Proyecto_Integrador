const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const file = fs.readFileSync("./index.html");
	res.writeHead (200, {
		'Content-Type': 'text/html; charset=UTF-8'
	});
	res.end(file);
});

server.listen(3000, () => console.log("sevidor Corriendo en http://localhost:3000/")) 




