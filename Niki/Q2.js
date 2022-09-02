// Q2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
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

function condition(n) {
  Notempyt(n);
  NotAllempty(n);
  NotString(n);
  IsDecimal(n);
  HaveDecimalSeparator(n);
}

// function Isnatural(n) {
//   if (n.length === 0) {
//     throw new Error("請輸入數字,不能為空");
//   } else if (n.replaceAll(" ", "").length === 0) {
//     throw new Error("請輸入數字,不能只輸入空格");
//   } else if (n != Number(n)) {
//     throw new Error("請輸入數字");
//   } else if (n !== String(Number(n))) {
//     throw new Error("請輸入十進位數字");
//   } else if (Number(n) !== Math.floor(Number(n))) {
//     throw new Error("請勿輸入小數");
//   }
// }

let Q = {
  question: "請輸入兩個數字?這是第一個數字",
  N1: "",
};


function question(Q) {
  // console.log(Q.question)
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(Q.question, (input) => {
    rl.close();
    try {
      condition(input);
    } catch (error) {
      console.log(error.message);
      return question(Q);
    }
    ChangeQuestion(Q);
    SetNumber(Q, input);
    question2(Q);
  });
}

function ChangeQuestion(Q) {
  Q.question = "請輸入第二個數字";
  return Q;
}

function SetNumber(Q, input) {
  if (Q.N1 === "") {
    Q.N1 = input;
  } else {
    Q.N2 = input;
  }
  return Q;
}

function end(Q) {
  if (Q.N1 % 3 === Q.N2 % 3) {
    Q.end="餘數相同";
  } else {
    Q.end="餘數不同";
  }
  console.log(Q.end)
}


function question2(Q) {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(Q.question, (input) => {
    try {
      condition(input);
    } catch (error) {
      console.log(error.message);
      rl.close();
      return question2(Q);
    }
    rl.close();
    SetNumber(Q, input);
    end(Q);
  });
}

question(Q);
