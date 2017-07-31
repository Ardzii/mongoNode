// Own Modules
// var tickerList = require('./getTickerList');
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

  function getTickerInfo(tickerList) {
    if (tickerList) {
      console.log('[SUCCESS]: Initiating the process');
      return Promise.all(tickerList.map(getSingleTicker));
    } else {
    console.log('[FAILED]: There was a problem importing the list.');
    }
  }

// getTickerInfo([ 'DASHEUR',
//   'DASHUSD',
//   'EOSEUR',
//   'EOSUSD',
//   'GNOEUR',
//   'GNOUSD',
//   'USDTUSD',
//   'ETCEUR',
//   'ETCUSD',
//   'ETHEUR',
//   'ETHUSD',
//   'LTCEUR',
//   'LTCUSD',
//   'REPEUR',
//   'REPUSD',
//   'XBTEUR',
//   'XBTUSD',
//   'XLMEUR',
//   'XLMUSD',
//   'XMREUR',
//   'XMRUSD',
//   'XRPEUR',
//   'XRPUSD',
//   'ZECEUR',
//   'ZECUSD' ]);

module.exports = {
  getTickerInfo,
}
