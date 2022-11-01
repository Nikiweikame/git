


function check(yes,no,input){
  try {
    for (let i = 3;i<arguments.length;i++){
      arguments[i](input);
    }
  } catch (error) {
    console.log(error.message);
    return no;
  };
  yes;
}

function checkEven(input) {
  if (input % 2 !== 0) {
    throw new Error("請輸入偶數");
  }
}

check(console.log("AA"),console.log("BB"),3,checkEven)
//  module.exports = check;