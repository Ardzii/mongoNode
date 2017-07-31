// External Modules
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modules/getTickerInfo').getTickerInfo;
var getTickerList = require('./modules/getTickerList').getTickerList;


// Generator function for connection
co(function*() {
  // URL
  var url = 'mongodb://localhost:27017/CryptoDB';
  // Connect to the Server
  var db = yield MongoClient.connect(url);

  // Inside the DB connection
  console.log('[SUCCESS]: Connection up and running...');

  async function worker() {
      var tickerList = await getTickerList();
      if (tickerList) {
        console.log('[SUCCESS]: Exporting the list...');
      } else {
        console.log('[FAILED]: Something went wrong with the list.');
      }
      var tickerInfo = await getTickerInfo(tickerList);
      var filename = `./modules/batches/${new Date().toISOString()}batch.json`;

      fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
          if (err) throw err;
          console.log("Done");
      });
  }

  worker();

  // Closing the DB connection
  // db.close();
  }).catch(function(err) {
  console.log(err.stack);
});
