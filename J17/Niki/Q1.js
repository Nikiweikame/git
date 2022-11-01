// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

let openReadLine = require("./openReadLine"); //開啟readline
let checkEmpty = require("./checkEmpty"); //空鑑定
let checkString = require("./checkString"); //字串鑑定
let checkDecimal = require("./checkDecimal"); // 十進位鑑定
let checkPositive = require("./checkPositive"); //正數鑑定
let checkZahlen = require("./checkZahlen"); //整數鑑定

const rl = openReadLine();
question1();

function question1() {
  rl.question("今天好想電影院有幾人買票??", (input) => {
    check(input);
  });
}

function check(input) {
  try {
    checkEmpty(input);
    checkString(input);
    checkDecimal(input);
    checkPositive(input);
    checkZahlen(input);
  } catch (error) {
    console.log(error.message);
    return question1();
  }
  console.log(movie(input));
  rl.close();
}

function movie(input) {
  return !Number(input) ? "今天不播放電影" : "照常播放電影";
}
