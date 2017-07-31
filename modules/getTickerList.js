// Own Modules
var getFromApi = require('./getFromApi').getFromApi;
var transformList = require('./transformList').transformList;

function getTickerList() {
  return getFromApi('AssetPairs')
    .then(transformList)
    .catch((error) => {
    console.log('Something went wrong: ', error);
  });
}

module.exports = {
  getTickerList,
}
