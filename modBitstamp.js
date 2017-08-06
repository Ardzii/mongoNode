// External Modules
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modulesBitStamp/getTickerInfo').getTickerInfo;


async function bitstampWorker() {
      var tickerList = ['btcusd', 'xrpusd', 'ltcusd']; //watch out potential updates: https://www.bitstamp.net/api/
      var tickerInfo = await getTickerInfo(tickerList);
      if (!fs.existsSync('./modulesBitStamp/batchesBitStamp/')) {
        fs.mkdirSync('./modulesBitStamp/batchesBitStamp/');
          console.log("[SUCCESS][BITSTAMP]: Directory successfully created!");
        var filename = `./modulesBitStamp/batchesBitStamp/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
            if (err) throw err;
            console.log(`[SUCCESS][BITSTAMP]: All tickers processed successfully into ${filename}!`);
          });
      } else {
        var filename = `./modulesBitStamp/batchesBitStamp/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
          if (err) throw err;
          console.log(`[SUCCESS][BITSTAMP]: All tickers processed successfully into ${filename}!`);
        });
      }
}

module.exports = {
  bitstampWorker,
}
