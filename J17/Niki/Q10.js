// 宣告一整數陣列 `array = [3,50,0,13,2,4,11]` 試寫一程式，印出陣列中所包含的質數以及其索引值。

let isPrime = require("./isPrime") // 判斷質數

let array = [3, 50, 0, 13, 2, 4, 11];

question10(array);

function question10(array) {
  let arrayPrime = array.filter(isPrime); // 取出只有質數的陣列
  outputPrimeIndex(array, arrayPrime);
}

function outputPrimeIndex(array, arrayPrime) {
  let index = 0;
  for (let i of arrayPrime) {
    console.log("質數" + i, "索引值" + array.indexOf(i, index));
    index = array.indexOf(i);
  }
}
