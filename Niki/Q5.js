// 寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
// (n最小為 4, 只會出現偶數)

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

function fourup(n) {
  if (n < 4) {
    throw new Error("請輸入4以上的偶數");
  }
}

function even(n) {
  if (n % 2 !== 0) {
    throw new Error("請輸入4以上的偶數");
  }
}

function check(n) {
  Notempyt(n);
  NotAllempty(n);
  NotString(n);
  IsDecimal(n);
  IsPositive(n);
  HaveDecimalSeparator(n);
  fourup(n);
  even(n);
}

function umleven(n) {
  if (n == 2) {
    return 0;
  } else {
    end = umleven(n - 2) + n * (n - 2);
    return end;
  }
}

// const readline = require("node:readline");
// const { stdin: input, stdout: output } = require("node:process");

// const rl = readline.createInterface({ input, output });
// rl.question("請輸入4以上的整數?", (n) => {
//   rl.close();
//   try {
//     Isnatural(askquestion("請輸入數字n:"));
//   } catch (error) {
//     console.log(error.message);
//     return question();
//   }
// });
function question() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("請輸入4以上的整數?", (input) => {
    rl.close();
    try {
      check(input);
    } catch (error) {
      console.log(error.message);
      return question();
    }
    console.log(umleven(input));
  });
}

question();
