// Own Modules
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

  function getTickerInfo(tickerList) {
    if (tickerList) {
      return Promise.all(tickerList.map(getSingleTicker));
    } else {
    console.log('[FAILED][BITSTAMP]: There was a problem importing the list.');
    }
  }

module.exports = {
  getTickerInfo,
}
