function checkZahlen(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error("請輸入整數");
  }
}

module.exports = checkZahlen;