var http = require('http');
var url = require("url");
var fs = require("fs");
var app = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);
  if (/\/(\w+)\.json/.test(pathname)) {
    try {
      if (fs.existsSync('.' + pathname)) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var fileJSON = require('.' + pathname);
        res.end(JSON.stringify(fileJSON));
      }
      else {
        defaultHandler(res)
      }
    } catch (e) {
      defaultHandler(res)
    }
  }
  else {
    defaultHandler(res)
  }
});

function defaultHandler(res) {
  res.statusCode = 403;
  res.end('');
}
var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Listening on " + port);
});