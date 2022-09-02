// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

// console.log(prompt("test"))

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

  rl.question("歡迎來到好想樂園,這是好想購票系統,請輸入您的年齡?", (age) => {
    rl.close();
    try {
      Isnatural(age)
    } catch (error) {
      console.log(error.message);
      return question();
    }
    end=price(age)
    // if (age > 6 && age < 65) {
    //   console.log("成票一張400元,Have a nice day!");
    // } else {
    //   console.log("優惠票一張200元,Have a nice day!");
    // }
    console.log(end)
  });
}

function price(age) {
  if (age > 6 && age < 65) {
    end="成票一張400元,Have a nice day!";
  } else {
    end="優惠票一張200元,Have a nice day!";
  }
  return end;
}

question();