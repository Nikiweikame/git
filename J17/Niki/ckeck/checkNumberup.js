function checkNumberup(input, Number) {
  if (input < Number) {
    throw new Error("請輸入" + Number + "以上的數");
  }
}

module.exports = checkNumberup;
