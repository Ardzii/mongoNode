// External Modules
var fs = require('fs');

// Own Modules
var getTickerInfo = require('./modulesBitfinex/getTickerInfo').getTickerInfo;
var getTickerList = require('./modulesBitfinex/getTickerList').getTickerList;

async function bitfinexWorker() {
      var tickerList = await getTickerList();
      var tickerInfo = await getTickerInfo(tickerList);
      if (!fs.existsSync('./modulesBitfinex/batchesBitfinex/')) {
        fs.mkdirSync('./modulesBitfinex/batchesBitfinex/');
          console.log("[SUCCESS][BITFINEX]: Directory successfully created!");
        var filename = `./modulesBitfinex/batchesBitfinex/${new Date().toISOString()}batch.json`;
        fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
            if (err) throw err;
            console.log(`[SUCCESS][BITFINEX]: All tickers processed successfully into ${filename}!`);
          });
      } else {
      var filename = `./modulesBitfinex/batchesBitfinex/${new Date().toISOString()}batch.json`;
      fs.writeFile(filename, JSON.stringify(tickerInfo), (err) => {
          if (err) throw err;
          console.log(`[SUCCESS][BITFINEX]: All tickers processed successfully into ${filename}!`);
      });
    }
  }

module.exports = {
  bitfinexWorker,
}
