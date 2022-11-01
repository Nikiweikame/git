//Q11 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。

let openReadLine = require("./openReadLine"); //開啟readline
let closeReadline = require("./closeReadLine"); //關閉readline
let checkEmpty = require("./checkEmpty"); //空鑑定
let checkString = require("./checkString"); //字串鑑定
let checkZero = require("./checkZero"); //0鑑定
let checkDecimal = require("./checkDecimal"); // 十進位鑑定
let checkZahlen = require("./checkZahlen"); //整數鑑定
let checkEven = require("./checkEven"); //偶數鑑定
let checkNumberup = require("./checkNumberup"); //大於某數鑑定

const rl = openReadLine();
question11();

function question11() {
  rl.question(
    "歡迎來到好想健身房，每期會員500元，請輸入需要購買的會員期數?\n",
    (input) => {
      check(input);
    }
  );
}

function check(input) {
  try {
    checkEmpty(input);
    checkString(input);
    checkZero(input);
    checkDecimal(input);
    checkZahlen(input);
  } catch (error) {
    console.log(error.message);
    return question11();
  }
  console.log(`感謝你訂購本產品${input}期，一共收你` + price(input) + "元，謝謝惠顧");
  closeReadline(rl);
}

function price(input) {
  let i = 1;
  let money = 0;
  let monthPrice = 500;
  do {
    if (i === 1) {
      money = money + monthPrice * 0.79;
    } else if (i % 5 === 0) {
      money = money + monthPrice - 200;
    } else {
      money = money + monthPrice;
    }
    i++;
  } while (i <= input);
  return money;
}
