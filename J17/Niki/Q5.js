// 寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
// (n最小為 4, 只會出現偶數)
let openReadLine = require("./openReadLine"); //開啟readline
let closeReadline = require("./closeReadLine");//關閉readline
let checkEmpty = require("./checkEmpty"); //空鑑定
let checkString = require("./checkString"); //字串鑑定
let checkDecimal = require("./checkDecimal"); // 十進位鑑定
let checkZahlen = require("./checkZahlen"); //整數鑑定
let checkEven = require("./checkEven"); //偶數鑑定
let checkNumberup =require("./checkNumberup") //大於某數鑑定

const rl = openReadLine();
question4();

function question4() {
  rl.question("請輸入4以上的偶數?", (input) => {
    check(input);
  });
}

function check(input) {
  try {
    checkEmpty(input);
    checkString(input);
    checkDecimal(input);
    checkZahlen(input);
    checkNumberup(input,4);
    checkEven(input);
  } catch (error) {
    console.log(error.message);
    return question4();
  }
  console.log(umleven(input));
  closeReadline(rl);
}

function umleven(n) {
  if (n == 2) {
    return 0;
  } else {
    end = umleven(n - 2) + n * (n - 2);
    return end;
  }
}