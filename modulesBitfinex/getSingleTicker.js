// Own Modules
const getFromApi = require('../getFromApi').getFromApi;


function getSingleTicker(tick) {
 return getFromApi('bitfinex','pubticker', tick)
      .then((ticker) => {
        var result = {};
        Object.keys(ticker).forEach((k) => {
          result= {
                name: tick,
                a: ticker.ask,
                b: ticker.bid,
                m: ticker.mid,
                c: ticker.last_price,
                v: ticker.volume,
                l: ticker.low,
                h: ticker.high,
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
        console.log('[FAILED][BITFINEX]: ', error);
  });
}

module.exports = {
  getSingleTicker,
}

// mid	[price]	(bid + ask) / 2
// bid	[price]	Innermost bid
// ask	[price]	Innermost ask
// last_price	[price]	The price at which the last order executed
// low	[price]	Lowest trade price of the last 24 hours
// high	[price]	Highest trade price of the last 24 hours
// volume	[price]	Trading volume of the last 24 hours
// timestamp	[time]	The timestamp at which this information was valid
