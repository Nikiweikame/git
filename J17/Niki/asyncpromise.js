function funcA() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("A");
      }, (Math.random() + 1) * 1000);
    });
  }
  
  function funcB() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("B");
      }, (Math.random() + 1) * 1000);
    });
  }
  
  function funcC() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("C");
      }, (Math.random() + 1) * 1000);
    });
  }

  async function funcD(){
    console.log("start");
    let result;
    result = await funcA();
    console.log(result);
    result = await funcB();
    console.log(result);
    result = await funcC();
    console.log(result);
  }

  funcD();