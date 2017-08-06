var modKraken = require('./modKraken').krakenWorker;
var modBitfinex = require('./modBitfinex').bitfinexWorker;
var modBitstamp = require('./modBitstamp').bitstampWorker;

function getEvery2Seconds(i) {
    setTimeout(() => {
      modBitstamp();
      modKraken();
      modBitfinex();
      console.log('[GETCOUNT]: Batches n. ', i);
      getEvery2Seconds(++i);
    }, 2000)
}

getEvery2Seconds(0);
