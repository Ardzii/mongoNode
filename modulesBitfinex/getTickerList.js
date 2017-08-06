// Own Modules
var getFromApi = require('../getFromApi').getFromApi;

function getTickerList() {
  return getFromApi('bitfinex','symbols')
    .then((data) => {
      return data;
    })
    .catch((error) => {
    console.log('Something went wrong: ', error);
  });
}

getTickerList()

module.exports = {
  getTickerList,
}
