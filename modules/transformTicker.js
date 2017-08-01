// Own Modules
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

function transformTicker(ticker) {
  var result = {};
  Object.keys(ticker).forEach((k) => {
      result= {
        name: k,
        a: ticker[k].a,
        b: ticker[k].b,
        c: ticker[k].c,
        v: ticker[k].v,
        p: ticker[k].p,
        t: ticker[k].t,
        l: ticker[k].l,
        h: ticker[k].h,
        o: ticker[k].o,
      }
      console.log(`[ADDED]: ${JSON.stringify(k)}`);
    // });
  });
  return result;
}

module.exports = {
  transformTicker,
}
// <pair_name> = pair name
//     a = ask array(<price>, <whole lot volume>, <lot volume>),
//     b = bid array(<price>, <whole lot volume>, <lot volume>),
//     c = last trade closed array(<price>, <lot volume>),
//     v = volume array(<today>, <last 24 hours>),
//     p = volume weighted average price array(<today>, <last 24 hours>),
//     t = number of trades array(<today>, <last 24 hours>),
//     l = low array(<today>, <last 24 hours>),
//     h = high array(<today>, <last 24 hours>),
//     o = today's opening price
