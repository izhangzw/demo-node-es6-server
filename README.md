<h1>帮助您快速搭建兼容ES6语法的node环境(使用<a href="http://babeljs.cn/" target="_blank">babel</a>)</h1>
<h3>开始吧</h3>
<p>进入你的工程目录下, 初始化一个工程, 将生成一个package.json文件</p>
<div class="highlight highlight-source-shell"><pre>$ npm init</pre></div>
<div class="highlight highlight-source-shell"><pre>$ npm install --save-dev babel-cli</pre></div>
<div class="highlight highlight-source-shell"><pre>$ npm install --save-dev babel-preset-es2015 babel-preset-stage-2</pre></div>

<p>创建index.js</p>
<div class="highlight highlight-source-js">
<pre><span class="pl-k">import</span> <span class="pl-smi">http</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>http<span class="pl-pds">'</span></span>;
const PORT = 8888;
const HOST = '127.0.0.1';
<span class="pl-smi">http</span>.<span class="pl-en">createServer</span>((<span class="pl-smi">request</span>, <span class="pl-smi">response</span>) <span class="pl-k">=&gt;</span> {
  <span class="pl-smi">response</span>.<span class="pl-en">writeHead</span>(<span class="pl-c1">200</span>, {<span class="pl-s"><span class="pl-pds">'</span>Content-Type<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>text/plain<span class="pl-pds">'</span></span>});
  <span class="pl-smi">response</span>.<span class="pl-en">end</span>(<span class="pl-s"><span class="pl-pds">'</span>HI i9<span class="pl-cce">\n</span><span class="pl-pds">'</span></span>);
}).<span class="pl-en">listen</span>(<span class="pl-c1">PORT</span>, <span class="pl-c1">HOST</span>);

<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">`</span>启动成功! - http://${HOST}:${PORT}/<span class="pl-pds">`</span></span>);</pre></div>

<p>修改package.json</p>
<div class="highlight highlight-source-diff"><pre>  "scripts": {
<span class="pl-mi1"><span class="pl-mi1">+</span>   "start": "babel-node index.js --presets es2015,stage-2"</span>
  }</pre></div>

<p>最后</p>
<div class="highlight highlight-source-shell"><pre>$ npm start</pre></div>
