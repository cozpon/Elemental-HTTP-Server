// jshint esversion:6
const http = require('http');
const queryString = require('querystring');
const fs = require('fs');
const PORT = 8080;
const handlers = require('./handlers');

const server = http.createServer((req, res) => {
  switch(req.method) {
    case 'GET':
      handlers.getRequest(req, res);
      break;
    case 'POST':
      // handlers.postRequest()
      break;
    default:
      //error handling 404
  }

}).listen(PORT, (err) => {
  console.log(`ServerBound, ${PORT}`);
});