// Own Modules
var getFromApi = require('../getFromApi').getFromApi;

function getTickerList() {
  var tickerArr = [];
  return getFromApi('bitfinex','symbols')
    .then((data) => {
      data.map((content) => {
        if (content.indexOf('usd') !== -1 ) {
          tickerArr.push(content);
      }
      })
      return tickerArr;
    })
    .catch((error) => {
    console.log('[BITFINEX] Something went wrong: ', error);
  });
}

module.exports = {
  getTickerList,
}
