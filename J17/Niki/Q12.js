//Q12 找出`10~20`的質數，並列出前述各質數在1~100的倍數

let isPrime = require("./isPrime"); // 判斷質數

question12(10, 20, 1, 100);

function question12(primeStart, primeEnd, rangeStart, rangeEnd) {
  let arrayPrime = creatPrime(primeStart, primeEnd);
  let range = creatRange(rangeStart, rangeEnd);
  let MultipleArray = arrayPrime.map(primeMultiple, range);
  console.log(MultipleArray);
  MultipleArray.map(printPrimeMultiple, range);
}

function creatPrime(start, end) {
  let arrayPrime = [];
  for (let i = start; i <= end; i++) {
    isPrime(i) ? arrayPrime.push(i) : void i;
  }
  console.log(arrayPrime);
  return arrayPrime;
}

function creatPrime2(start, end) {
  let arrayPrime = [];
  for (let i = start; i <= end; i++) {
    arrayPrime.push(i);
  }
  return arrayPrime.filter(isPrime);
}

function primeMultiple(prime) {
  let findPrimeMultiple = [prime];
  for (let i = this.start; i <= this.end; i++) {
    i % prime === 0 ? findPrimeMultiple.push(i) : void i;
  }
  return findPrimeMultiple;
}

function creatRange(start, end) {
  start <= 0 ? (start = 1) : void 0;
  console.log({ start: start, end: end })
  return { start: start, end: end };
}

function printPrimeMultiple(MultipleArray) {
  console.log(
    "質數 " +
      MultipleArray.shift() +
      " 在 " +
      this.start +
      " ~ " +
      this.end +
      " 的倍數為 " +
      MultipleArray.join()
  );
}
