async function funcA() {
  return new Promise(function (resolve, reject) {
    // setTimeout(function () {
    //   console.log("A");
    //   resolve("A");
    // }, (Math.random() + 1) * 1000);
    setTimeout(function () {
      console.log("AB");
      reject("AB");
    }, (Math.random() + 1) * 500);
  });
}

function funcB() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("B");
      resolve("B");
    }, (Math.random() + 1) * 1000);
  });
}

function funcC() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("C");
      resolve("C");
    }, (Math.random() + 1) * 1000);
  });
}

function funcD() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("D");
      resolve("D");
    }, (Math.random() + 1) * 1000);
  });
}

 funcA().then(funcB, funcD).then(funcC);
