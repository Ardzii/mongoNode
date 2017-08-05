// External Modules
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modulesKraken/getTickerInfo').getTickerInfo;
var getTickerList = require('./modulesKraken/getTickerList').getTickerList;


// Generator function for connection
co(function*() {
  // URL
  var url = 'mongodb://localhost:27017/CryptoDB';
  // Connect to the Server
  var db = yield MongoClient.connect(url);

  // Inside the DB connection
  console.log('[SUCCESS]: Connection up and running...');

  async function krakenWorker() {
      var tickerList = await getTickerList();
      var tickerInfo = await getTickerInfo(tickerList);
      if (!fs.existsSync('./modulesKraken/batchesKraken/')) {
        fs.mkdirSync('./modulesKraken/batchesKraken/');
          console.log("[SUCCESS]: Directory successfully created!");
        var filename = `./modulesKraken/batchesKraken/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
            if (err) throw err;
            console.log(`[SUCCESS]: All tickers processed successfully into ${filename}!`);
          });
      } else {
      var filename = `./modulesKraken/batchesKraken/${new Date().toISOString()}batch.json`;
      fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
          if (err) throw err;
          console.log(`[SUCCESS]: All tickers processed successfully into ${filename}!`);
      });
    }
  }

  krakenWorker();

  // Closing the DB connection
  // db.close();
  }).catch(function(err) {
  console.log(err.stack);
});
