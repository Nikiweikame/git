// Q2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

let CheckEmpty = require("./checkEmpty"); //空鑑定
let CheckString = require("./checkString"); //字串鑑定
let CheckDecimal = require("./checkDecimal"); // 十進位鑑定
let CheckZahlen = require("./checkZahlen"); //整數鑑定
let openReadLine = require("./openReadLine"); //開啟readline

const rl = openReadLine();

let Q2 = {
  question: "請輸入兩個整數?這是第一個數字",
  setNumber: [],
  end: "",
};

question2(Q2);

function question2(Q2) {
  rl.question(Q2.question, (input) => {
    check(input);
  });
}

function check(input) {
  try {
    CheckEmpty(input); // 命名統一問題
    CheckString(input);
    CheckDecimal(input);
    CheckZahlen(input);
  } catch (error) {
    console.log(error.message);
    return question2(Q2);
  }
  setNumber(Q2, input);
  decideNext(Q2);
}

function setNumber(Q2, input) {
  Q2.setNumber.push(input);
}

function decideNext(Q2) {
  if (Q2.setNumber.length === 2) {
    console.log(remainderCalculate(Q2));
    rl.close();
  } else {
    askAgain(Q2);
  }
}

function remainderCalculate(Q2) {
  if (Q2.setNumber[0] % 3 === Q2.setNumber[1] % 3) {
    Q2.end = "餘數相同";
  } else {
    Q2.end = "餘數不同";
  }
  return Q2.end;
}

function remainderCalculate(Q2) {
  return (Q2.setNumber[0] % 3 === Q2.setNumber[1] % 3) ? "餘數相同" : "餘數不同"
} 

// 一個func做太多事情，利用boolean值的function 

function askAgain(Q2) {
  changeQuestion(Q2);
  question2(Q2);
}

function changeQuestion(Q2) {
  Q2.question = "請輸入第二個數字:";
  // return Q2;
}
