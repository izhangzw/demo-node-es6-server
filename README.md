<h1>帮助您快速搭建兼容ES6语法的node环境(使用<a href="http://babeljs.cn/" target="_blank">babel</a>)</h1>
<h3>开始吧</h3>

<p>进入你的工程目录下, 初始化一个工程, 将生成一个package.json文件</p>
<div class="highlight highlight-source-shell"><pre>$ npm init</pre></div>

<p>安装<code>babel-cli</code></p>
<div class="highlight highlight-source-shell"><pre>$ npm install --save-dev babel-cli</pre></div>

<p>还有一些预设</p>
<div class="highlight highlight-source-shell"><pre>$ npm install --save-dev babel-preset-es2015 babel-preset-stage-2</pre></div>

<p>创建index.js</p>
<div class="highlight highlight-source-js">
<pre>import http from 'http';
const PORT = 8888;
const HOST = '127.0.0.1';
http.createServer((request, response) =&gt; {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('HI i9');
}).listen(PORT, HOST);

console.log(`启动成功! - http://${HOST}:${PORT}/`);
</pre></div>

<p>修改package.json, 添加一行如下</p>
<div class="highlight highlight-source-diff">
<pre>  "scripts": {
+   "start": "babel-node index.js --presets es2015,stage-2"
  }</pre></div>

<p>最后, 启动服务</p>
<div class="highlight highlight-source-shell"><pre>$ npm start</pre></div>
