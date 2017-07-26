var request = require('request');
var _ = require('underscore');

var getTickerList = new Promise((resolve, reject) => {
  var tickerArr = [];
  request({
    url: 'https://api.kraken.com/0/public/AssetPairs',
    json: true
  }, (error, response, body) => {

    var jsonObject = body;
    _.map(jsonObject, function(content) {
      _.map(content, function(data) {
        if (data.altname.indexOf('EUR') !== -1 || data.altname.indexOf('USD') !== -1)
          tickerArr.push(data.altname);
          // resolve(tickerArr = [1, 2, 3, 4, 5, 6]);
      });
    });
    resolve(tickerArr);
  })
});

module.exports = {
  getTickerList,
}
