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
  // if resource path (url) does not exist, return 404 response code and render 404.html
  console.log("POST");
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    let post = queryString.parse(body);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.writeFile(`./public/${post.elementName}.html`, elementGen.elementGen(post), function(err){
      if (err) throw err;
    });
    res.end();
  });
}


