var getSingleTicker = require('./getSingleTicker').getSingleTicker;

function transformTicker(ticker) {
  var result = {};
  Object.keys(ticker).forEach((pair) => {
    Object.keys(ticker[pair]).forEach((k) => {
      result= {
        name: k,
        a: ticker.result[k].a,
        b: ticker.result[k].b,
        c: ticker.result[k].c,
        v: ticker.result[k].v,
        p: ticker.result[k].p,
        t: ticker.result[k].t,
        l: ticker.result[k].l,
        h: ticker.result[k].h,
        o: ticker.result[k].o,
      }
      return result;
    });
  });
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
