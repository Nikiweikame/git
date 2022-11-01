function checkOneEmpty(input) {
  if (!input.length) {
    throw new Error("請輸入值,不能為空");
  }
}

function checkAllEmpty(input) {
  // if (CheckNumber.replaceAll(" ", "").length === 0) {
  if (!input.trim().length) {
    throw new Error("不能只輸入空格");
  }
}

function checkEmpty(input){
  checkOneEmpty(input);
  checkAllEmpty(input);
}

module.exports = checkEmpty;