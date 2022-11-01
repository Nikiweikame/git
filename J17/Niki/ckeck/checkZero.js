function checkZero(input) {
  if (!Number(input)) {
    throw new Error("請勿輸入0");
  }
}

module.exports = checkZero;