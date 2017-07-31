const getFromApi = require('./getFromApi').getFromApi;
const transformTicker = require('./transformTicker');

function getSingleTicker(tick) {
    getFromApi('Ticker', {pair: tick}).then(transformTicker).catch((error) => {
      console.log('[FAILED]: ', error);
  });
}

module.exports = {
  getSingleTicker,
}
