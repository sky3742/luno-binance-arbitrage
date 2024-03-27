import "dotenv/config";
import crypto from "./utils/index.js";

import * as binance from "./binance/index.js";
import * as luno from "./luno/index.js";

const myrusdt = process.env.USDT_Rate;

function main() {
  console.log("Buy from Luno and sell in Binance");
  console.log("Disclaimer: The profit calculated is not inclusive of fees\n");

  for (const value of Object.values(crypto)) {
    checkPrice(value);
  }
}

async function checkPrice(crypto) {
  const [t1, t2] = await Promise.all([
    luno.getLatestPrice(crypto),
    binance.getLatestPrice(crypto),
  ]);

  // console.log(
  //   t1.pair.padEnd(8, ' '),
  //   "| Bid:", (t1.bid / myrusdt).toFixed(4),
  //   "| Ask:", (t1.ask / myrusdt).toFixed(4),
  // );

  // console.log(
  //   t2.symbol.padEnd(8, ' '),
  //   "| Bid:", (t2.bidPrice).toFixed(4),
  //   "| Ask:", (t2.askPrice).toFixed(4),
  // );

  const rate = t2.bidPrice / (t1.ask / myrusdt);
  const pnl = (rate - 1) * 100;

  // console.log(crypto.ticker.padEnd(4, " "), pnl.toFixed(2), "%");

  console.log(crypto.ticker);
  console.log("Luno (MYR)  :", Number(t1.ask.toFixed(4)));
  console.log("Luno (USDT) :", Number((t1.ask / myrusdt).toFixed(4)));
  console.log("Binance     :", Number(t2.bidPrice.toFixed(4)));
  console.log("Profit      :", Number(pnl.toFixed(2)), "%\n");
}

main();
