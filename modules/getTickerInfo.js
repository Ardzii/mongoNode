var request = require('request');
var async = require('async');
var _ = require('underscore');


var getTickerList = require('./getTickerList').getTickerList;


async function getTickerInfo() {
  const tickerArr = await getTickerList;
  var tickerInfo = {}
  var getTickerInfo = new Promise((resolve, reject) => {
    async.forEach(tickerArr, (item) => {
      request({
        url:`https://api.kraken.com/0/public/Ticker?pair=${item}`,
        json: true
      }, (error, response, body) => {
        tickerInfo.push(body.result);
      })
    });
  resolve();
  });
}

getTickerInfo()


module.exports = {
  getTickerInfo
}
