// External Modules
var request = require('request');
var yargs = require('yargs');
var _ = require('underscore');
var async = require('async');
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');

// Own Modules

// Variables
var tickerArr= []

// Generator function for connection
co(function*() {
  // Connection URL
  var url = 'mongodb://localhost:27017/CryptoDB';
  // Use connect method to connect to the Server
  var db = yield MongoClient.connect(url);

  // Inside the DB connection
  console.log('Connection up and running...');

  // Getting the list of the tickers for USD and EUR exclusively
  request({
    url:'https://api.kraken.com/0/public/AssetPairs',
    json: true
  }, (error, response, body) => {
    var jsonObject = body;
    _.map(jsonObject, function(content) {
      _.map(content, function(data) {
        if(data.altname.indexOf('EUR') !== -1 || data.altname.indexOf('USD') !== -1)
          tickerArr.push(data.altname);
      });
    });
    // Getting the ticker info for each USD && EUR ticker available
    async.forEach(tickerArr, (item) => {
      request({
        url:`https://api.kraken.com/0/public/Ticker?pair=${item}`,
        json: true
      }, (error, response, body) => {
              db.collection('Assets').insertOne(
                body.result,
                request({
                      url:'https://api.kraken.com/0/public/Time',
                      json: true
                    }, (error, response, body) => {
                        return body.result;
                    })
                  );
              console.log('Asset Added!', body.result);
      });
    });
  });
  // Closing the DB connection
  // db.close();
  }).catch(function(err) {
  console.log(err.stack);
});
