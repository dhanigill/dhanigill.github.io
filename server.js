const http = require('http');

const hostname = '192.168.100.106';
const port = 3000;

const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('index.html')
});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`)
});