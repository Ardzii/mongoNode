// External Modules
var rp = require('request-promise');

function getFromApi(mod, request, params) {
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
        // console.log('[SUCCESS]: Connected to the API...');
        return data.result;
        // console.log(data.result); //Just to check everything works properly.
      } else {
        console.log('[PENDING]: Retrying connection - Probably timed-out!');
      }
    }).catch((error) => {
      console.log('[FAILED]: ', error);
    });
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
  }
}

// getFromApi('bitstamp', 'ticker', 'btceur')

module.exports = {
  getFromApi,
}
