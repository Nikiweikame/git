//  輸入 n 印出 1+2-3+4-5+6...n 的算式與總和

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
// rl.question("請輸入自然數?", (a) => {
//   var even = 2;
//   var odd = 1;

//   if (a == Math.abs(a) && a != 0 && a == Math.floor(a) && a == Number(a)) {
//     b = parseInt(a / 2);
//     // console.log(b)
//     if (a % 2 == 1) {
//       for (let n = 0; n < b; n++) {
//         odd--;
//       }
//       console.log(odd);
//     } else if (a % 2 == 0) {
//       for (let n = 0; n < b; n++) {
//         even++;
//       }
//       console.log(even);
//     }
//   } else {
//     console.log("輸入錯誤");

//   }
//   rl.close();
// });

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  if (input == 0) {

  rl.close();
  }
});