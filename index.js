var express = require('express');
var Q = require('q');
var app = express();

app.set('json spaces', 2);

app.get('/facts.json', function (req, res) {
  var fileJSON = require('./json/facts.json');
  res.json(fileJSON);
});

app.get('/long_facts.json', function (req, res) {
  var fileJSON = require('./json/long_facts.json');
  res.json(fileJSON);
});

app.get('/unstable_facts.json', function (req, res) {
  if (random(1, 10) > 3) {
    res.status(500).send('error!');
  } else {
    var fileJSON = require('./json/facts.json');
    res.json(fileJSON);
  }

});

function delay(ms) {
  var deferred = Q.defer();
  setTimeout(deferred.resolve, ms);
  return deferred.promise;
}

function random(min, max) {
  return Math.ceil(Math.random()*(max-min)+min);
}

app.get('/slow_facts.json', function (req, res) {
  delay(random(1000, 10000)).then(function(){
    var fileJSON = require('./json/facts.json');
    res.json(fileJSON);
  });
});

app.all('/*', function (req, res) {
  res.status(404).send('Sorry, we cannot find that!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Listening on " + port);
});