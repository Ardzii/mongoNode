var modKraken = require('./modKraken').krakenWorker;
var modBitfinex = require('./modBitfinex').bitfinexWorker;
var modBitstamp = require('./modBitstamp').bitstampWorker;

function loop(i) {
    setTimeout(() => {
      modBitstamp();
      modKraken();
      modBitfinex();
      loop(++i);
    }, 1);
}

loop(0);
