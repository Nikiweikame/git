// 寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
// (n最小為 4, 只會出現偶數)

function umleven(n) {
  if (n == 2) {
    return 0;
  } else {
    end = umleven(n - 2) + n * (n - 2);
    return end;
  }
}

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
rl.question("請輸入4以上的整數?", (n) => {
  if (
    n == Math.abs(n) &&
    n != 0 &&
    n == Math.floor(n) &&
    n == Number(n) &&
    n >= 4 &&
    n % 2 == 0
  ) {
    var end = umleven(n);
    console.log(end);
    rl.close();
  } else {
    console.log("輸入錯誤");
    rl.close();
  }
});
