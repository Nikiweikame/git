# node.js 程式練習


## 練習說明:

```
環境: node.js
步驟:

1. 開新分支，用自己的英文名字命名
2. 每一題 (每一個 h3 都是獨立的一題) 都要回答，包含印出計算過程
3. 答完貼出自己的 source code 與執行結果
```

## 第一階段

### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

### 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

### 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「[比較運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和

### 5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`

(n最小為 4, 只會出現偶數)

### 6. 宣告陣列 `name`，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

### 7. 印出下圖，並轉 90°

```
  ** ** 
 ******* 
*********
*********
 *******
  *****
   ***
    *
```

### 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 `function  divi(n)` 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

### 9. 宣告兩個具有5個元素的整數陣列 arr1 和 arr2 ，並利用陣列設定初值的方式，將 `arr1[0]~arr1[4]` 分別設值為 2,3,1,7,9， `arr2[0]~arr2[4]` 分別設值為 8,7,9,3,1，將 arr1 與 arr2 兩陣列對應項相加，列印出相加後的陣列

### 10. 宣告一整數陣列 `array = [3,50,0,13,2,4,11]` 試寫一程式，印出陣列中所包含的質數以及其索引值。

### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。

### 12. 找出`10~20`的質數，並列出前述各質數在1~100的倍數

### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?
世界上最快記錄!!
2018年8月23日，烏龜界的記錄: 每秒跑0.28公尺 (號稱「龜界博爾特」)
2017年12月12日的兔子界記錄: 每秒20公尺

### 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數`function twofold(b, m)` 。讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。
(細菌線性成長)

### 15. 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

### 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

### 17. 運用 Borda Count。算出下面的候選人分數。
(第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

![](https://i.imgur.com/rWpuyyk.png)


## 第二階段

回答以下問題的 `console.log` 印出了什麼
要解釋執行結果為什麼是這樣。

### 問題1

```javascript
var b = 1;

console.log(b);
a();
console.log(b);

var a = function() {
  console.log(b);
  b = 3;
}
```

### 問題2

```javascript=
var b = 1;

console.log(b);
a();
console.log(b);

function a() {
  console.log(b);
  var b = 2;
}
```

### 問題3

`function a1`加了一個`if`

```javascript=
var b = 1;

console.log(b);
a();
console.log(b);

function a() {
  if (1) {
    console.log(b);
    var b = 4;
  }
  console.log(b);
  var b = 2;
}
```

### 問題4

`var`改用`let`

```javascript=
var b = 1;

console.log(b);
a();
console.log(b);

function a() {
  if (1) {
    console.log(b);
    let b = 4;
  }
  console.log(b);
  var b = 2;
}
```

### 問題5

`var`, `let`, `const`的差別??

```javascript=
var a = 1;
var a = 10;
console.log(a);
```
```javascript=
//ES6
let b = 2;
let b = 20;
//b = 30;
console.log(b);
```
```javascript=
//ES6
const c = 3;
const c = 30;
// c = 20;
console.log(c);
```

### 問題6

function name的用途。

```javascript=
var a = function b() {
  console.log('c');
}

a();
b();
```

### 問題7


```javascript=
function b() {
  console.log('c');
}

var a = b();

b();
a();
```

### 問題8

What is `this`？
console.log(); 印出什麼呢？

```javascript=
var c = {
  name: 'The c object',
  log: function(){
    var self = this;
    log1 = function () {
      console.log(self);
      console.log(this);
    }
    this.log2 = function (){
      console.log(self === this);
  }
  log1();
  this.log2();
  }
}

c.log();
```
[出處](http://disp.cc/b/11-9KhD)

### 問題9


```javascript=
function getPerson() {
  return
  {
    firstname: 'Knuckles'
  }
}

console.log(getPerson());
```

### 問題10

有一個`J()`的`constructor`

```javascript=
function J() {
  this.name = "John";
}

var a = new J();
a
//J {name: "John"}
a.__proto__.constructor
//function J() {
//  this.name = "John";
// }
J
// function J() {
//   this.name = "John";
// }
console.log(J.constructor);
console.log(a.__proto__.__proto__.constructor);
```

最下面的`console.log()`會印什麼？


### 問題11

會不會執行`console.log("Hello");`?

```javascript=
var x = 10;
switch(x) {
    case "10": 
    console.log("Hello");
}
```

### 問題12

請問會印出什麼

```javascript=
var i = 10;
while(i --> 0) {
  console.log(i);
}
```

### 問題13

```javascript=
var a = [1, 2, 3]

function foo(x) {
    x.push(4)

    x = [4, 5, 6]
    x.push(7)
}

foo(a)
console.log(a)
```

第二階段題目出處: https://hackmd.io/p/BJzOOmVkW#/
