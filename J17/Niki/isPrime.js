function isPrime(num) {
  // 判斷質數
  if (num < 2) {
    return false;
  } // 質數不能小於2
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime