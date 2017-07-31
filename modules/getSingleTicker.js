// Own Modules
const getFromApi = require('./getFromApi').getFromApi;
const transformTicker = require('./transformTicker').transformTicker;

function getSingleTicker(tick) {
  return getFromApi('Ticker', {pair: tick}).then(transformTicker).catch((error) => {
  console.log('[FAILED]: ', error);
  });
}

module.exports = {
  getSingleTicker,
}
