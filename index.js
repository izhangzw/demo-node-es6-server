import http from 'http';

const PORT = 8888;
const HOST = '127.0.0.1';

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('hello world');
}).listen(PORT, HOST);

console.log('启动成功！http://'+HOST+':'+PORT+'/')
