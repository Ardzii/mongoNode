var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const KrakenClient = require('@warren-bank/node-kraken-api')
const kraken = new KrakenClient('api_key', 'api_secret', {timeout: 10000})


var url = 'mongodb://localhost:27017/mongoTuto';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected to the server.");
  insertDocuments(db, function() {
      db.close();
  });

});

var insertDocuments = function(db, callback) {

  var collection = db.collection('documents');

  collection.insertOne({
    ticker
  }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted documents into the collection");
    callback(result);
  });
}

var ticker = kraken.api('Ticker', {"pair": 'XXBTZEUR'})
                .then((result) => {
                  result
                })
                .catch((error) => {
                  console.log('Error:', error.message)
                });
