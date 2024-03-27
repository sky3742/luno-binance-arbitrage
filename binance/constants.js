export const apiKey = process.env.Binance_ApiKey;
export const apiSecret = process.env.Binance_ApiSecret;
export const host = "https://fapi.binance.com";
export const endpoint = {
  serverTime: "/fapi/v1/time",
  balance: "/api/1/balance",
  ticker: "/fapi/v1/ticker/bookTicker",
};
