// External Modules
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert');

// Own Modules
const getTickerList = require('./modules/getTickerList').getTickerList;
const getTickerInfo = require('./modules/getTickerInfo');

// Generator function for connection
co(function*() {
  // Connection URL
  var url = 'mongodb://localhost:27017/CryptoDB';
  // Use connect method to connect to the Server
  var db = yield MongoClient.connect(url);

  // Inside the DB connection
  console.log('Connection up and running...');

  async function exec() {
    var tickerList = await getTickerList;
    var tickerInfo = await getTickerInfo;
    // var serverTime = await getServerTime;
    console.log(tickerList);
    console.log(tickerInfo);
    // console.log(serverTime);
  }

  exec()


  //   // Getting the ticker info for each USD && EUR ticker available
  //   async.forEach(tickerArr, (item) => {
  //     request({
  //       url:`https://api.kraken.com/0/public/Ticker?pair=${item}`,
  //       json: true
  //     }, (error, response, body) => {
  //             db.collection('Assets').insertOne(
  //               body.result,
  //               request({
  //                     url:'https://api.kraken.com/0/public/Time',
  //                     json: true
  //                   }, (error, response, body) => {
  //                       return body.result;
  //                   })
  //                 );
  //             console.log('Asset Added!', body.result);
  //     });
  //   });
  // });
  // Closing the DB connection
  // db.close();
  }).catch(function(err) {
  console.log(err.stack);
});
