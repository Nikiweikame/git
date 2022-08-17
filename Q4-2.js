//Q4  輸入 n 印出 1+2-3+4-5+6...n 的算式與總和

function Isnatural(n) {
  if (n.length === 0) {
    throw new Error("請輸入數字,不能為空");
  } else if (n.replaceAll(" ", "").length === 0) {
    throw new Error("請輸入數字,不能只輸入空格");
  } else if (n != Number(n)) {
    throw new Error("請輸入數字");
  } else if (n !== String(Number(n))) {
    throw new Error("請輸入十進位數字");
  } else if (Number(n) !== Math.abs(Number(n))) {
    throw new Error("請輸入正數");
  } else if (Number(n) === 0) {
    throw new Error("請勿輸入0");
  } else if (Number(n) !== Math.floor(Number(n))) {
    throw new Error("請勿輸入小數");
  }
}

function question() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("請輸入數字n:", (input) => {
    try {
      Isnatural(input)
    } catch (error) {
      console.log(error.message);
      rl.close();
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
  });
}

question();