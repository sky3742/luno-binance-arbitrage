import { _fetch } from "./utils.js";
import { endpoint } from "./constants.js";

export async function getBalance() {
  const { resp } = await _fetch(endpoint.balance);
  return resp.map((data) => ({
    ...data,
    balance: Number(data.balance),
    reserved: Number(data.reserved),
    unconfirmed: Number(data.unconfirmed),
  }));
}

export async function getLatestPrice({ luno: pair }) {
  const resp = await _fetch(endpoint.ticker, { pair });
  return {
    ...resp,
    ask: Number(resp.ask),
    bid: Number(resp.bid),
    last_trade: Number(resp.last_trade),
    rolling_24_hour_volume: Number(resp.rolling_24_hour_volume),
    timestamp: Number(resp.timestamp),
  };
}
