// External Modules
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modulesBitStamp/getTickerInfo').getTickerInfo;

// Generator function for connection
co(function*() {
  // URL
  var url = 'mongodb://localhost:27017/CryptoDB';
  // Connect to the Server
  var db = yield MongoClient.connect(url);

  // Inside the DB connection
  console.log('[SUCCESS]: Connection up and running...');

  async function bitStampWorker() {
      var tickerList = ['btcusd', 'btceur', 'eurusd', 'xrpusd', 'xrpeur', 'xrpbtc', 'ltcusd', 'ltceur', 'ltcbtc']; //watch out potential updates: https://www.bitstamp.net/api/
      var tickerInfo = await getTickerInfo(tickerList);
      if (!fs.existsSync('./modulesBitStamp/batchesBitStamp/')) {
        fs.mkdirSync('./modulesBitStamp/batchesBitStamp/');
          console.log("[SUCCESS]: Directory successfully created!");
        var filename = `./modulesBitStamp/batchesBitStamp/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
            if (err) throw err;
            console.log(`[SUCCESS]: All tickers processed successfully into ${filename}!`);
          });
      } else {
        var filename = `./modulesBitStamp/batchesBitStamp/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
          if (err) throw err;
          console.log(`[SUCCESS]: All tickers processed successfully into ${filename}!`);
        });
      }
  }

  bitStampWorker();

  // Closing the DB connection
  // db.close();
  }).catch(function(err) {
  console.log(err.stack);
});
