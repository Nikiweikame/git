// 參數"tasks"是一個函式陣列,

function serials(tasks, callback) {
  var step = tasks.length;
  var result = [];

  // 檢查的邏輯寫在這裡
  // 確認執行完之後執行callback函式
  function check(r) {
    result.push(r);
    if (result.length === step) {
      callback();
    }
  }
  // 執行tasks內的function並檢查
  // Array.prototype.forEach() 陣列的每一個項目都要執行
  tasks.forEach(function (f) {
    f(check);
  });
}

// funcA,funcB,funcC

function funcA(check) {
  setTimeout(function () {
    console.log("A");
    check("A");
  }, (Math.random() + 1) * 1000);
}

function funcB(check) {
  setTimeout(function () {
    console.log("B");
    check("B");
  }, (Math.random() + 1) * 1000);
}

function funcC(check) {
  setTimeout(function () {
    console.log("C");
    check("C");
  }, (Math.random() + 1) * 1000);
}

function funcD() {
  console.log("上菜！");
}



serials([funcA, funcB, funcC], funcD);
