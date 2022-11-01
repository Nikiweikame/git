let CheckEmpty = require("./CheckEmpty");
let CheckString = require("./CheckString");
let CheckDecimal=require("./CheckDecimal");
let CheckPositive = require("./CheckPositive");
let CheckZero=require("./CheckZero");
let CheckZahlen=require("./CheckZahlen");

// let Isnatural = require("./check");

function question() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("請輸入數字n:", (input) => {
    rl.close();
    try {
      CheckEmpty(input);
      CheckString(input);
      CheckDecimal(input);
      CheckPositive(input);
      CheckZero(input);
      CheckZahlen(input);
    } catch (error) {
      console.log(error.message);
      return question();
    }
  });
}

question();
