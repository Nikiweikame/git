// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

// console.log(prompt("test"))

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("歡迎來到好想樂園,這是好想購票系統,請輸入您的年齡?", (age) => {
  if (
    age != Number(age) ||
    age != Math.abs(age) ||
    age != Math.floor(age) 
  ) {
    console.log("輸入錯誤");
  } else if (age > 6 && age < 65) {
    console.log("成票一張400元,Have a nice day!");
  } else {
    console.log("優惠票一張200元,Have a nice day!");
  }
  rl.close();
});
