// External Modules
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modulesKraken/getTickerInfo').getTickerInfo;
var getTickerList = require('./modulesKraken/getTickerList').getTickerList;

async function krakenWorker() {
      var tickerList = await getTickerList();
      var tickerInfo = await getTickerInfo(tickerList);
      if (!fs.existsSync('./modulesKraken/batchesKraken/')) {
        fs.mkdirSync('./modulesKraken/batchesKraken/');
          console.log("[SUCCESS][KRAKEN]: Directory successfully created!");
        var filename = `./modulesKraken/batchesKraken/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
            if (err) throw err;
            console.log(`[SUCCESS][KRAKEN]: All tickers processed successfully into ${filename}!`);
          });
      } else {
      var filename = `./modulesKraken/batchesKraken/${new Date().toISOString()}batch.json`;
      fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
          if (err) throw err;
          console.log(`[SUCCESS][KRAKEN]: All tickers processed successfully into ${filename}!`);
      });
    }
  }

module.exports = {
  krakenWorker,
}
