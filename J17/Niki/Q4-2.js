//Q4  輸入 n 印出 1+2-3+4-5+6...n 的算式與總和
let openReadLine = require("./openReadLine"); //開啟readline
let checkEmpty = require("./checkEmpty"); //空鑑定
let checkString = require("./checkString"); //字串鑑定
let checkDecimal = require("./checkDecimal"); // 十進位鑑定
let checkPositive = require("./checkPositive"); //正數鑑定
let checkZero = require("./checkZero"); //0鑑定
let checkZahlen = require("./checkZahlen"); //整數鑑定

const rl = openReadLine();
question4();

function question4() {
  rl.question("請輸入數字n:", (input) => {
    check(input);
  });
}

function check(input) {
  try {
    checkEmpty(input);
    checkString(input);
    checkDecimal(input);
    checkPositive(input);
    checkZero(input);
    checkZahlen(input);
  } catch (error) {
    console.log(error.message);
    return question4();
  }
  console.log(output(input));
  rl.close();
}
function output(input) {
  return expression(input) + answer(input); // 算式+答案
}
function answer(input) {
  let end = 1; //答案
  for (let n = 2; n <= input; n++) {
    end = end + n * (-1) ** n;
  }
  return end;
}

//算式expression
function expression(input) {
  let procedure = "1"; //過程
  for (let n = 2; n <= input; n++) {
    !(n % 2)
      ? (procedure = procedure + "+" + n)
      : (procedure = procedure + "-" + n);
  }
  return procedure + "=";
}

// console.log(askquestion("請輸入數字n:"))
