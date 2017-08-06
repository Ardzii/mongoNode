// Own Modules
var getFromApi = require('../getFromApi').getFromApi;
var transformList = require('./transformList').transformList;

function getTickerList() {
  return getFromApi('kraken','AssetPairs')
    .then(transformList)
    .catch((error) => {
    console.log('[KRAKEN] Something went wrong: ', error);
  });
}

module.exports = {
  getTickerList,
}
