Hey there! Welcome to my tryout at a "sort of" fast-trading app for crypto-currencies.  The objective is to compare bid/ask prices between different markets/exchanges at the same time and check if there are some arbitrage opportunities. The next step (once the database implemented) will be to make some back testing on various different crypto assets to find a correct pricing model and try to take positions based on it.
There's a lot of work to do but I thought I'd try to give a few headlines here before finishing everything...

- List of known bugs:
  * I know I have some problem with the transformation of the object for Bitfinex and Bitstamp. There's a problem with the for loop and I think that my app is making too many operations for nothing. The output however for the moment seems to be good so (unfortunately) not urgent!
  * I also know I have handled the errors very badly... I'm a total beginner in programming and even more in Node.JS so I'll need to make a little more digging before getting it right. That's a work in progress.

- List of Options:
  * Bitstamp's ticker list must be updated manually as I wasn't able to find a proper GET address to update it automatically.
  * At the moment the ticker list are focusing (for request limitation reasons) on crypto/USD pairs. Can be updated to needs in the getTickerList modules (for Kraken and Bitfinex).
  * API servers only let me make so many calls, so I've adapted it in the getFromApi module for each market. This can be adjusted over time

Obviously, any recommendation / help is more than welcome!
