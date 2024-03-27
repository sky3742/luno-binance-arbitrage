import dayjs from "dayjs";
import { exec } from "child_process";
import { question } from "./index.js";
import fs from "fs";

const dateFormat = "DD MMM YYYY hh:mm A";
const updatedAt = dayjs(process.env.USDT_UpdatedAt);
const url =
  "https://p2p.binance.com/en/trade/sell/USDT?fiat=PGK&payment=all-payments";
const diff = dayjs().diff(updatedAt, "minute");

if (diff > 2 * 60) {
  console.log("USDT outdated by", Math.round(diff / 60), "hours");
  console.log("Update at:", url, "\n");

  if (String(await question("Open (y/n): ")).toLowerCase() === "y") {
    exec(`open ${url}`);
  }

  const rate = Number(await question("USDT rate: "));
  if (isNaN(rate)) {
    console.log("Invalid USDT rate");
    process.exit(1);
  }

  process.env.USDT_Rate = rate;

  const envs = fs.readFileSync(".env", "utf-8").split("\n");
  fs.writeFileSync(
    ".env",
    envs
      .map((v) => {
        if (!v.startsWith("USDT")) return v;

        const [key] = v.split("=");
        const value = key.includes("Rate") ? rate : dayjs().format(dateFormat);
        return [key, value].join("=");
      })
      .join("\n"),
  );
}
