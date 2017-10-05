// jshint esversion:6
const queryString = require('querystring');
const http = require('http');
const fs = require('fs');

module.exports = {
  getRequest: getRequest
};

const resDetails = {};
resDetails.HTTP = 'HTTP/1.1 200 OK';
resDetails.server = 'Server: ' + 'nginx/1.4.6 (Ubuntu)';
resDetails.date = `Date: ${new Date().toUTCString()}`;
resDetails.contentType = 'text/html; charset=utf-8';
resDetails.contentLength = '20209';
resDetails.connection = 'keep-alive';

function getRequest(req, res){
  let method = req.method; // GET, HEAD, POST, etc..
  let url = req.url;
  // let query = queryString.stringify(req);
  // let parsedQuery = queryString.parse(query);
  // let path = parsedQuery.url;
  let resHead; //response header
  let resBody; // response body

  fs.readFile(`./public${url}`, (err, data) => {
    resHead = `${resDetails.HTTP}
${resDetails.server}
${resDetails.date}
Content-Type: ${resDetails.contentType}
Content-Length: ${data.length}
Connection: ${resDetails.connection}

`;
  resBody = data;
  // res.writeHead(resHead);
  res.write(resBody, () => {
    res.end();
  });
});
}