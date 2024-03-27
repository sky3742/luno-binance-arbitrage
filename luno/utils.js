import { stringify } from "querystring";
import { host, apiKey, apiSecret } from "./constants.js";

export async function _fetch(path, param) {
  const query = param ? "?" + stringify(param, "&", "=") : "";

  const resp = await fetch(host + path + query, {
    headers: {
      Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
    },
  });

  return await resp.json();
}
