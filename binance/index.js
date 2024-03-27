import { _fetch } from "./utils.js";
import { endpoint } from "./constants.js";

export async function getLatestPrice({ binance: symbol }) {
  const resp = await _fetch(endpoint.ticker, { symbol });
  return {
    ...resp,
    bidPrice: Number(resp.bidPrice),
    bidQty: Number(resp.bidQty),
    askPrice: Number(resp.askPrice),
    askQty: Number(resp.askQty),
  };
}
