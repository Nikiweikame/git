function checkEven(input) {
  if (input % 2 !== 0) {
    throw new Error("請輸入偶數");
  }
}

module.exports = checkEven;
