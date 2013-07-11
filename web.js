#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexFile = fs.readFileSync("./index.html");
  response.send(indexFile.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
