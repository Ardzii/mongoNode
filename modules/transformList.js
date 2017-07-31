// External Modules
var _ = require('underscore');

// Own Modules
var getFromApi = require('./getTickerList').getTickerList;

function transformList(res) {
  var tickerArr = [];
  _.map(res, function(content) {
    if (content.altname.indexOf('EUR') !== -1 && content.altname.indexOf('.d') === -1 || content.altname.indexOf('USD') !== -1 && content.altname.indexOf('.d') === -1)
      tickerArr.push(content.altname);
    });
  return tickerArr;
};

module.exports = {
  transformList,
}
