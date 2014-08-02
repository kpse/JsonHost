var express = require('express');
var app = express();

app.set('json spaces', 2);

app.get('/facts.json', function(req, res){
  var fileJSON = require('./json/facts.json');
  res.json(fileJSON);
});

app.get('/long_facts.json', function(req, res){
  var fileJSON = require('./json/long_facts.json');
  res.json(fileJSON);
});

app.all('/*', function(req, res){
  res.status(404).send('Sorry, we cannot find that!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Listening on " + port);
});