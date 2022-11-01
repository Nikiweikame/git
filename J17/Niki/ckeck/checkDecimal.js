function checkDecimal(input) {
  checkBinary(input);
  checkOctal(input);
  checkHexadecimal(input);
}

function checkBinary(input) {
  if (input.startsWith("0b")) {
    throw new Error("請勿輸入二進位數字");
  }
}

function checkOctal(input) {
  if (input.startsWith("0o")) {
    throw new Error("請勿輸入八進位數字");
  }
}
function checkHexadecimal(input) {
  if (input.startsWith("0x")) {
    throw new Error("請勿輸入十六進位數字");
  }
}

module.exports = checkDecimal;
