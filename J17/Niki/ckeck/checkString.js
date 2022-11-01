//修正

function checkString(input) {
  if (isNaN(Number(input))) {
    throw new Error("請輸勿輸入文字");
  }
}

module.exports = checkString;