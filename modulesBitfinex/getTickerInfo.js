// Own Modules
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

function getTickerInfo(tickerList) {
  if (tickerList) {
    return Promise.all(tickerList.map(getSingleTicker));
  } else {
  console.log('[FAILED][BITFINEX]: There was a problem importing the list.');
  }
}

function loop(i) {
  setTimeout(() => {
    var res = getTickerInfo(['btcusd', 'ltcusd', 'zecusd', 'etcusd']);
    loop(++i);
  }, 500);
}

loop(0);


module.exports = {
  getTickerInfo,
}
