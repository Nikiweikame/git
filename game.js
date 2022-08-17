function start() {
  title = `這是好想無人島
  `;
  maptop = `┌───┬───┬───┬───┬───┬───┬───┬───┐
  `;
  mapspace = `│   │   │   │   │   │   │   │   │
  `;
  maphr = `├───┼───┼───┼───┼───┼───┼───┼───┤
  `;
  mapbottom = "└───┴───┴───┴───┴───┴───┴───┴───┘";
  mapspace1 = `│ ◉ │   │   │   │   │   │   │   │
  `;
  mapspace2 = `│   │ ◉ │   │   │   │   │   │   │
  `;
  mapspace3 = `│   │   │ ◉ │   │   │   │   │   │
  `;
  mapspace4 = `│   │   │   │ ◉ │   │   │   │   │
  `;
  mapspace5 = `│   │   │   │   │ ◉ │   │   │   │
  `;
  mapspace6 = `│   │   │   │   │   │ ◉ │   │   │
  `;
  mapspace7 = `│   │   │   │   │   │   │ ◉ │   │
  `;
  mapspace8 = `│   │   │   │   │   │   │   │ ◉ │
  `;
  map =
    title +
    maptop +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace1 +
    mapbottom;
  console.log(
    "你現在因為飛機失事掉落在一個無人島上,◉是你目前的位子,請在這個孤島上努力生存直到搜救隊來救你"
  );
  // console.log("這是好想無人島");
  console.log(map);
  m = map.length;
  console.log(m);

  // for (let i = 0; i < m; i++) {
  //   console.log(i, map[i]);
  // }
  const readline = require("node:readline");
  const { stdin: input, stdout: output } = require("node:process");

  const rl = readline.createInterface({ input, output });
  let day = 1,
    act = 40,
    food = 3,
    position = 480;
  v = 7;
  h = 1;
  console.log("生存Day:" + day, "行動點:" + act, "食物:" + food);
  console.log("請輸入數字來執行動作");
  console.log(
    "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
  );
  rl.on("line", (n) => {
    switch (Number(n)) {
      case 1:
        console.log(map);
        console.log("生存Day:" + day, "行動點:" + act, "食物:" + food);
        console.log("請輸入數字來執行動作");
        console.log(
          "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
        );
        break;
      case 2:
        console.log("發現了椰子樹,食物增加2");
        food = food + 2;
        act--;
        if (act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 3:
        if (v == 1) {
          console.log("無法向上");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        position = position - 72;
        v = parseInt((position - 7) / 72 + 1);
        console.log(v, h);
        map = map.replace("│ ◉ │", "│   │");
        // console.log(map)
        for (let i = 0; i < (v - 1) * 8 + h; i++) {
          map = map.replace("│   │", "│ ◉ │");
        }
        for (let i = 0; i < (v - 1) * 8 + h - 1; i++) {
          map = map.replace("│ ◉ │", "│   │");
        }
        console.log(map);
        act--;
        if (act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 4:
        if (h == 8) {
          console.log("無法向右");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        position = position + 4;
        v = parseInt((position - 7) / 72 + 1);
        h = parseInt((position - 7 - 36 - 2 - (v - 1) * 72) / 4 + 1);
        console.log(v, h);
        act--;
        map = map.replace("│ ◉ │   │", "│   │ ◉ │");
        console.log(map);
        if (act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 5:
        if (h == 1) {
          console.log("無法向左");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        position = position - 4;
        v = parseInt((position - 7) / 72 + 1);
        h = parseInt((position - 7 - 36 - 2 - (v - 1) * 72) / 4 + 1);
        console.log(v, h);
        act--;
        map = map.replace("│   │ ◉ │", "│ ◉ │   │");
        console.log(map);
        if (act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 6:
        if (v == 7) {
          console.log("無法向下");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        position = position + 72;
        v = parseInt((position - 7) / 72 + 1);
        console.log(v, h);
        map = map.replace("│ ◉ │", "│   │");
        // console.log(map)
        for (let i = 0; i < (v - 1) * 8 + h; i++) {
          map = map.replace("│   │", "│ ◉ │");
        }
        for (let i = 0; i < (v - 1) * 8 + h - 1; i++) {
          map = map.replace("│ ◉ │", "│   │");
        }
        console.log(map);
        act--;
        if (act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
    }
  });
}

start();
