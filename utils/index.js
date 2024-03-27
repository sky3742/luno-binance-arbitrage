import "./rate.js";
import { crypto } from "./constants.js";
import readline from "readline";

export function question(quest) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((res) => {
    rl.question(quest, (ans) => {
      rl.close();
      res(ans);
    });
  });
}

export default crypto;
