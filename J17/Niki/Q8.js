// 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 `function  divi(n)` 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

let openReadLine = require("./openReadLine"); //開啟readline
let checkEmpty = require("./checkEmpty"); //空鑑定
let checkString = require("./checkString"); //字串鑑定
let checkDecimal = require("./checkDecimal"); // 十進位鑑定
let checkPositive = require("./checkPositive"); //正數鑑定
// let checkZero = require("./checkZero"); //0鑑定
let checkZahlen = require("./checkZahlen"); //整數鑑定

const rl = openReadLine();
question8();

function question8() {
  rl.question("輸入一正整數:", (input) => {
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
    return question8();
  }
  rl.close();
  console.log(`${input} 除 `+divi(input)+` 次後，小數點後第 2 位會等於 0`);
}

function divi(input, times = 0) {
  input = input / 3;
  times++;
  if (Math.floor((100 * input) % 10) !== 0) {
    return divi(input, times);
  } else {
    return (times);
  }
}
