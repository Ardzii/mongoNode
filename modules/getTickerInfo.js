var tickerList = require('./getTickerList').getTickerList;
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

function getTickerInfo(tickerList) {
  return Promise.all(tickerList.map(getSingleTicker));
}





// var request = require('request');
// var async = require('async');
// var fs = require('fs')
//
// var getTickerList = require('./getTickerList').getTickerList;
// var unixTimeStamp = new Date().toISOString();

// async function getTickerInfo() {
//
//   var tickerArr = await getTickerList;
//   var arrLength = tickerArr.length;
//   var init = 0;
//
//   console.log(`${arrLength} to process to the batchfile...`);
//   var getTickerInfo = new Promise((resolve, reject) => {
//     async.forEach(tickerArr, (item, callback) => {
//       request({
//         url:`https://api.kraken.com/0/public/Ticker?pair=${item}`,
//         json: true
//       }, (error, response, body) => {
//         var tickerInfo = JSON.stringify(body.result)
//         fs.appendFile(`./modules/batches/${unixTimeStamp}batch.json`, tickerInfo, (err) => {
//           if (err) throw err;
//           init ++;
//           var progress = Math.round(init / arrLength * 100);
//           console.log(`[${progress}%] - ${item} successfully added!`);
//         });
//          resolve();
//       })
//     });
//   });
// }
//
// getTickerInfo()
//
//
// module.exports = {
//   getTickerInfo,
//   unixTimeStamp,
// }
