// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

// var a = function () {
//   let n = prompt("123");
//   return n
// };

// alert('歡迎來到 fooish.com');

// function question() {
//   const readline = require("node:readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.question("請輸入數字n:", (input) => {
//     try {
//     } catch (error) {
//       console.log(error.message);
//       rl.close();
//       return question();
//     }
//     rl.close();
//   });
// }
question();

function question() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("今天好想電影院有幾人買票??", (input) => {
    try {
      Isnatural(input);
    } catch (error) {
      console.log(error.message);
      rl.close();
      return question();
    }
    rl.close();
    return end(input);
  });
}


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
  HaveDecimalSeparator(n);
}



function end(input) {
  if (input != Number(false)) {
    console.log("照常播放電影");
  } else {
    console.log("今天不播放電影");
  }
}
