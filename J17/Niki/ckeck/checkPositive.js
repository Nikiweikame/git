function checkPositive(input) {
  if (Number(input) !== Math.abs(Number(input))) {
    throw new Error("請輸入正數");
  }
}

module.exports = checkPositive;
