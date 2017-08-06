// Own Modules
const getFromApi = require('../getFromApi').getFromApi;

function getSingleTicker(tick) {
 return getFromApi('bitstamp','ticker', tick)
      .then((ticker) => {
        var result = {};
        Object.keys(ticker).forEach((k) => {
          result= {
                name: tick,
                a: ticker.ask,
                b: ticker.bid,
                c: ticker.last,
                v: ticker.volume,
                p: ticker.vwap,
                l: ticker.low,
                h: ticker.high,
                o: ticker.open,
                n: ticker.timestamp,
          }
          // **** There's a bug there related with the previous forEach.
          // I know what's the problem but not sure how to fix it. Basically the Object.keys command returns an array
          // of the keys within the object and then I do for each key a reordering: Meanning a console.log() for each keys
          // That's obviously not what I want but I'm afraid to break the loop by modifying it and besides the console.log()
          // everything works great... *******
        });
        return result;
      })
      .catch((error) => {
        console.log('[FAILED][BITSTAMP]: ', error);
  });
}

module.exports = {
  getSingleTicker,
}

// high
// last
// timestamp
// bid
// vwap
// volume
// low
// ask
// open
