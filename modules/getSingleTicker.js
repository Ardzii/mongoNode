// Own Modules
const getFromApi = require('./getFromApi').getFromApi;
const transformTicker = require('./transformTicker').transformTicker;

function getSingleTicker(tick) {
 return getFromApi('Ticker', {pair: tick})
      .then(transformTicker).catch((error) => {
console.log('[FAILED]: ', error);
  });
}

getSingleTicker('DASHEUR');

module.exports = {
  getSingleTicker,
}

// [ 'DASHEUR',
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
//   'ZECUSD' ]
