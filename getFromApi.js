// External Modules
var rp = require('request-promise');

// **** SETTING COUNTER AND VARIABLE FOR EACH API TO KEEP WITHIN THE ACCEPTED NUMBER OF REQUESTS ***
var countBitfinex = 0;

setInterval(function(){
    countBitfinex = 0;
}, 9000);

// **** START OF THE FUNCTION GETFROMAPI *****

function getFromApi(mod, request, params) {

// *** KRAKEN API REQUEST ***

  if (mod === 'kraken') {
    var uri = `https://api.kraken.com/0/public/${request}`;
    return rp({
      url: uri,
      qs: params,
      json: true,
    }).then((data) => {
      if (data.error.length) {
        throw new Error(`There was a problem: `, data.error[0]);
      } else if (data.result) {
        return data.result;
      } else {
        console.log('[PENDING]: Retrying connection - Probably timed-out!');
      }
    }).catch((error) => {
      console.log('[FAILED]: ', error);
    });

// *** BITSTAMP API REQUEST ***

  } else if (mod === 'bitstamp') {
      var uri = `https://www.bitstamp.net/api/v2/${request}/${params}`;
      return rp({
          url: uri,
          json: true,
        }).then((data) => {
          return data;
        }).catch((error) => {
          console.log('[FAILED]: ', error);
        });

// *** BITFINEX API REQUEST ***

  } else if (mod = 'bitfinex') {
      if (params) {
        var uri = `https://api.bitfinex.com/v1/${request}/${params}`
      } else {
        var uri = `https://api.bitfinex.com/v1/${request}`
      }
      return rp({
        url: uri,
        json: true,
      }).then((data) => {
       if (countBitfinex <= 5) {
          countBitfinex++;
          console.log(countBitfinex);
          return data;
        } else if (countBitfinex > 5) {
          console.log('[PROC STOPPED]');
          return countBitfinex;
        }
      }).catch((error) => {
        console.log('[FAILED]: ', error);
      });
  }
}

module.exports = {
  getFromApi,
}
