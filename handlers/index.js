// jshint esversion:6
const queryString = require('querystring');
const http = require('http');
const fs = require('fs');

module.exports = {
  getRequest: getRequest
};

function getRequest(req, res){
  let method = req.method; // GET, HEAD, POST, etc..
  let query = queryString.stringify(req);
  let parsedQuery = queryString.parse(query);
  let path = parsedQuery.url;
  res.write(path);
  console.log(query);
  res.end();
}