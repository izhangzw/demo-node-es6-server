帮助您快速搭建兼容ES6语法的node环境
babel
npm init
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015 babel-preset-stage-2;
创建index.js
import http from 'http';

const PORT = 8888;
const HOST = '127.0.0.1';

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('HI i9');
}).listen(PORT, HOST);

console.log(`启动成功! - http://${HOST}:${PORT}/`)
修改package.json
{
  scripts: {
 +  "start": "babel-node index.js --presets es2015,stage-2"
  }
}

npm start
