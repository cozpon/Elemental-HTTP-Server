// jshint esversion:6
const http = require('http');
const queryString = require('querystring');
const fs = require('fs');
const PORT = 8080;

// const { method, url } = request;



const routingTable = {
  '/' : 'public/index.html',
  '/hydrogen.html' : 'public/hydrogen.html',
  '/helium.html' : 'public/helium.html',
  '/404.html' : 'public/404.html',
  '/css/styles.css' : 'public/css/styles.css',
  '/elements' : '-'
};



const server = http.createServer();
  server.on('request', (req, res) => {
  //req.pipe(res);
  req.on('data', (data) => {
    res.write(data);
  });

let method = req.method; // GET, HEAD, POST, etc..


let query = queryString.stringify(req);
let parsedQuery = queryString.parse(query);
let path = parsedQuery.url;
res.write(parsedQuery.rawHeaders.toString());
console.log(path);
console.log(parsedQuery.rawHeaders);
res.end();
});

server.listen(PORT, (err) => {
  console.log(`ServerBound, ${PORT}`);
});