//Q4  輸入 n 印出 1+2-3+4-5+6...n 的算式與總和

function Notempyt(n) {
  if (n.length === 0) {
    throw new Error("請輸入數字,不能為空");
  }
}

function NotAllempty(n) {
  if (n.replaceAll(" ", "").length === 0) {
    throw new Error("請輸入數字,不能只輸入空格");
  }
}

function NotString(n) {
  if (n != Number(n)) {
    throw new Error("請輸入數字");
  }
}

function IsDecimal(n) {
  if (n !== String(Number(n))) {
    throw new Error("請輸入十進位數字");
  }
}

function IsPositive(n) {
  if (Number(n) !== Math.abs(Number(n))) {
    throw new Error("請輸入正數");
  }
}

function NotZero(n) {
  if (Number(n) === 0) {
    throw new Error("請勿輸入0");
  }
}

function HaveDecimalSeparator(n) {
  if (!Number.isInteger(Number(n))) {
    throw new Error("請勿輸入小數");
  }
}

function Isnatural(n) {
  Notempyt(n);
  NotAllempty(n);
  NotString(n);
  IsDecimal(n);
  IsPositive(n);
  NotZero(n);
  HaveDecimalSeparator(n);
}

// function askquestion(string) {
//   const readline = require("node:readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.question(string, (input) => {
//     rl.close;
//     return input
//   });
// }

function question() {
    try {
      Isnatural(askquestion("請輸入數字n:"));
    } catch (error) {
      console.log(error.message);
      return question();
    }
    let end = 1,
      procedure = "1";
    for (let n = 2; n <= input; n++) {
      end = end + n * (-1) ** n;
      if (n % 2 == 0) {
        procedure = procedure + "+" + n;
      } else {
        procedure = procedure + "-" + n;
      }
    }
    procedure = procedure + "=";
    console.log(procedure, end);
    rl.close();
}

question();
// console.log(askquestion("請輸入數字n:"))