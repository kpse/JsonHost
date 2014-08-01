var http = require('http');
var app = http.createServer(function (req, res) {
  var fileJSON = require('./facts.json');
  res.end(JSON.stringify(fileJSON));
});
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});