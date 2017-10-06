// jshint esversion:6
const queryString = require('querystring');
const http = require('http');
const fs = require('fs');

module.exports = {
  getRequest: getRequest
};



function getRequest(req, res){
  const resDetails = {};
  resDetails.server = 'nginx/1.4.6 (Ubuntu)';
  resDetails.date = new Date().toUTCString();
  resDetails.contentType = 'text/html; charset=utf-8';
  resDetails.connection = 'keep-alive';
  let url = './public';
  if(req.url === '/'){
    url += '/index.html';
  } else {
    url += req.url;
  }

  if(req.url === '/css/styles.css'){
    resDetails.contentType = 'text/css; charset=utf-8';
  }


  fs.readFile(url, (err, data) => {
    res.setHeader('Server', resDetails.server);
    res.setHeader('Date', resDetails.date);
    res.setHeader('Content-Length', data.length);
    res.setHeader('Connection', resDetails.connection);
    res.writeHead(200, {'Content-Type': `${resDetails.contentType}`});
    res.write(data.toString(), () => {
      res.end();
    });
  });
}




function postRequest(req, res){

}
