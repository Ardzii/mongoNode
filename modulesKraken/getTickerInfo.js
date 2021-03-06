// Own Modules
// var tickerList = require('./getTickerList');
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

  function getTickerInfo(tickerList) {
    if (tickerList) {
      return Promise.all(tickerList.map(getSingleTicker));
    } else {
    console.log('[FAILED][KRAKEN]: There was a problem importing the list.');
    }
  }

module.exports = {
  getTickerInfo,
}
