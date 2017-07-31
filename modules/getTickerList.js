var _ = require('underscore');

var getFromApi = require('./getFromApi').getFromApi;

function getTickerList() {
  return getFromApi('AssetPairs').then((res) => {
    var tickerArr = []
    // I need to edit the info recieved as not everything is usefull
    _.map(res, function(content) {
      if (content.altname.indexOf('EUR') !== -1 && content.altname.indexOf('.d') === -1 || content.altname.indexOf('USD') !== -1 && content.altname.indexOf('.d') === -1)
        tickerArr.push(content.altname);
      });
    console.log(`[SUCCESS]: The app found ${tickerArr.length} tickers to look for...`);
  }).catch((error) => {
    console.log('Something went wrong: ', error);
  });
}

module.exports = {
  getTickerList,
}
