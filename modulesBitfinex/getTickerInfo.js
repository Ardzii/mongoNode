// Own Modules
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

  function getTickerInfo(tickerList) {
    if (tickerList) {
      console.log('[SUCCESS]: Initiating the process');
      return Promise.all(tickerList.map(getSingleTicker));
    } else {
    console.log('[FAILED]: There was a problem importing the list.');
    }
  }

module.exports = {
  getTickerInfo,
}
