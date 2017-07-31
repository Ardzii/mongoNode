// External Modules
var rp = require('request-promise');

function getFromApi(request, params) {
  return rp({
      url: `https://api.kraken.com/0/public/${request}`,
      qs: params,
      json: true,
    }).then((data) => {
      if (data.error.length) {
        throw new Error(`There was a problem: `, data.error[0]);
      } else {
        console.log('[SUCCESS]: Connected to the API...');
        return data.result;
        // console.log(data.result); //Just to check everything works properly.
      }
    }).catch((error) => {
      console.log('[FAILED]: ', error);
    });
}

// getFromApi('Ticker', {pair: 'XXBTZEUR'}) // For test


module.exports = {
  getFromApi,
}
