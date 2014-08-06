var Q = require('q')

exports.delay = function(ms) {
  var deferred = Q.defer();
  setTimeout(deferred.resolve, ms);
  return deferred.promise;
}

exports.random = function(min, max) {
  var deferred = Q.defer();
  deferred.resolve(Math.ceil(Math.random()*(max-min)+min));
  return deferred.promise;
}