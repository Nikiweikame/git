// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

let openReadLine = require("./openReadLine"); //開啟readline
let checkEmpty = require("./checkEmpty"); //空鑑定
let checkString = require("./checkString"); //字串鑑定
let checkDecimal = require("./checkDecimal"); // 十進位鑑定
let checkPositive = require("./checkPositive"); //正數鑑定
let checkZero = require("./checkZero"); //0鑑定
let checkZahlen = require("./checkZahlen"); //整數鑑定

const rl = openReadLine();
question3();

function question3() {
  rl.question("歡迎來到好想樂園,這是好想購票系統,請輸入您的年齡?", (age) => {
    check(age);
  });
}

function check(age) {
  try {
    checkEmpty(age);
    checkString(age);
    checkDecimal(age);
    checkPositive(age);
    checkZahlen(age);
  } catch (error) {
    console.log(error.message);
    return question3();
  };
  price(age);
  console.log(`${ticket} 一張 ${price} 元,Have a nice day!`)
}

function price(age) {
  let end;
  age > 6 && age < 65
  ? end = 400
  : end = 200;
  console.log(end);
  rl.close();
}

// question();
