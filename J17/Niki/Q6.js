//Q6 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

let openReadLine = require("./openReadLine"); //開啟readline
let CheckEmpty = require("./checkEmpty"); //空鑑定

let name = [];
let question = {};
question.origin = "請輸入名字，";
question.index = [
  "這是第一個名字",
  "這是第二個名字",
  "這是第三個名字",
  "這是第四個名字",
];
question.times = 0;

const rl = openReadLine();
question6(name, question);

function question6(name, question) {
  rl.question(questionOutput(question), (newName) => {
    name.push(newName);
    check(name, question);
  });
}

function questionOutput(question) {
  return question.origin + question.index[question.times];
}

function check(name, question) {
  try {
    CheckEmpty(name[question.times]);
  } catch (error) {
    console.log(error.message);
    name.pop();
    return question6(name, question);
  }
  continueOrNot(name, question);
}

function continueOrNot(name, question){
  if (name.length === 4) {
    rl.close();
    pickUpOneAndThree(name);
  } else {
    question.times++;
    question6(name, question);
  }
}

// function arrayPush()

function pickUpOneAndThree(name) {
  name = [name[0], name[2]];
  printOddWord(name);
}

function printOddWord(name) {
  let oddWord = {};
  for (let i in name) {
    oddWord[name[i]] = "";
    for (let j = 0; j < name[i].length; j = j + 2) {
      oddWord[name[i]] = oddWord[name[i]] + name[i][j];
    }
  }
  console.log(oddWord);
}
