// jshint esversion:6
const queryString = require('querystring');
const http = require('http');
const fs = require('fs');
const elementGen = require('./elementGenerator.js');

module.exports = {
  getRequest: getRequest,
  postRequest: postRequest
};

function getRequest(req, res){
  let server = 'nginx/1.4.6 (Ubuntu)';
  let date = new Date().toUTCString();
  let contentType = 'text/html; charset=utf-8';
  let connection = 'keep-alive';
  let url = './public';
  if(req.url === '/'){
    url += '/index.html';
  } else {
    url += req.url;
  }
  if(req.url === '/css/styles.css'){
    contentType = 'text/css; charset=utf-8';
  }

  fs.readFile(url, (err, data) => {
    if (err) throw err;
    res.setHeader('Server', server);
    res.setHeader('Date', date);
    res.setHeader('Content-Length', data.length);
    res.setHeader('Connection', connection);
    res.writeHead(200, {'Content-Type': `${contentType}`});
    res.write(data.toString(), () => {
      res.end();
    });
  });
}


function postRequest(req, res){
  console.log("POST");
  let p = './public';
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    let post = queryString.parse(body);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.writeFile(`./public/index.html`, elementGen.updateIndex(post), function(err){
      if (err) throw err;
    });
    fs.writeFile(`./public/${post.elementName}.html`, elementGen.elementGen(post), function(err){
      if (err) throw err;
    });
    fs.readdir(p, file);
      console.log(file);
      console.log(file);
    res.end();
  });
}
