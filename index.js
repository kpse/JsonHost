var http = require('http');
http.createServer(function (req, res) {
  var fileJSON = require('./facts.json');
  res.end(JSON.stringify(fileJSON));
}).listen(80, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');