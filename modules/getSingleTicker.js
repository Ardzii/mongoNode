const getFromApi = require('./getFromApi');

function getSingleTicker(tick) {
    return getFromApi('Ticker', {pair: 'XXBTZEUR'}).then((data) => {
      console.log('This is the data', data);
  }).catch((err) => {
      console.log('[Failed]: ', err);
  });
}

module.exports = {
  getSingleTicker,
}
