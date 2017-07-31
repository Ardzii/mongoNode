// Own Modules
var getSingleTicker = require('./getSingleTicker').getSingleTicker;

function transformTicker(ticker) {
  var result = {};
  Object.keys(ticker).forEach((k) => {
    // Object.keys(ticker[pair]).forEach((k) => {
      // console.log(k);
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
      console.log(`[ADDED]: ${k}`);
      return result;
    // });
  });
}

// transformTicker({
//   error: [ ],
//   result: {
//     XETHZEUR: {
//       a: ["164.40000","6","6.000"],
//       b: ["164.40000","14","14.000"],
//       c: ["165.50000","14.45821873"],
//       v: ["70.59286717","44595.67696673"],
//       p: ["169.34955","169.27608"],
//       t: [64,13978],
//       l: ["165.49377","163.10000"],
//       h: ["171.46256","176.29917"],
//       o: "168.00000"
//     }
//   }
// });

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
