// External Modules
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modules/getTickerInfo').getTickerInfo;
var unixTimeStamp = require('./modules/getTickerInfo').unixTimeStamp;


// Generator function for connection
co(function*() {
  // URL
  var url = 'mongodb://localhost:27017/CryptoDB';
  // Connect to the Server
  var db = yield MongoClient.connect(url);

  // Inside the DB connection
  console.log('[SUCCESS]: Connection up and running...');


  // Closing the DB connection
  // db.close();
  }).catch(function(err) {
  console.log(err.stack);
});
