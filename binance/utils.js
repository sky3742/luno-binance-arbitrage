import { createHmac } from "crypto";
import { stringify } from "querystring";
import { host, apiKey, apiSecret } from "./constants.js";

export async function _fetch(path, param) {
  const query = param ? "?" + stringify(param, "&", "=") : "";

  const resp = await fetch(host + path + query, {
    headers: {
      "X-MBX-APIKEY": apiKey,
    },
  });

  return await resp.json();
}

function getSignature(params) {
  const str = Object.entries(params)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map((value) => value.join("="))
    .join("&");

  return createHmac("sha256", apiSecret).update(str).digest("base64");
}
