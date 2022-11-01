function start(Island) {
  const title = `這是好想無人島
  `;
  const maptop = `┌───┬───┬───┬───┬───┬───┬───┬───┐
  `;
  const mapspace = `│   │   │   │   │   │   │   │   │
  `;
  const maphr = `├───┼───┼───┼───┼───┼───┼───┼───┤
  `;
  const mapbottom = "└───┴───┴───┴───┴───┴───┴───┴───┘";
  const mapspace1 = `│ ◉ │   │   │   │   │   │   │   │
  `;
  const mapspace2 = `│   │ ◉ │   │   │   │   │   │   │
  `;
  const mapspace3 = `│   │   │ ◉ │   │   │   │   │   │
  `;
  const mapspace4 = `│   │   │   │ ◉ │   │   │   │   │
  `;
  const mapspace5 = `│   │   │   │   │ ◉ │   │   │   │
  `;
  const mapspace6 = `│   │   │   │   │   │ ◉ │   │   │
  `;
  const mapspace7 = `│   │   │   │   │   │   │ ◉ │   │
  `;
  const mapspace8 = `│   │   │   │   │   │   │   │ ◉ │
  `;
  let map =
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
  // console.log(
  //   "你現在因為飛機失事掉落在一個無人島上,◉是你目前的位子,請在這個孤島上努力生存直到搜救隊來救你"
  // );
  // console.log("這是好想無人島");
  console.log(map);
  let m = map.length;
  console.log(m);

  // for (let i = 0; i < m; i++) {
  //   console.log(i, map[i]);
  // }
  const readline = require("node:readline");
  const { stdin: input, stdout: output } = require("node:process");

  const rl = readline.createInterface({ input, output });
  let report ="Day:" + Island.day + " 行動點:" + Island.act+ " 食物:" + Island.food
  console.log(report);
  console.log("請輸入數字來執行動作");
  console.log(
    "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
  );
  rl.on("line", (n) => {
    switch (Number(n)) {
      case 1:
        console.log(map);
        report ="Day:" + Island.day + " 行動點:" + Island.act+ " 食物:" + Island.food
        console.log(report);
        console.log("請輸入數字來執行動作");
        console.log(
          "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
        );
        break;
      case 2:
        console.log("發現了椰子樹,食物增加2");
        Island.food = Island.food + 2;
        Island.act--;
        if (Island.act == 0) {
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
        if (Island.v == 1) {
          console.log("無法向上");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position - 72;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        console.log(Island.v, Island.h);
        map = map.replace(" ◉ ", "   ");
        // console.log(map)
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h; i++) {
          map = map.replace("   ", " ◉ ");
        }
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h - 1; i++) {
          map = map.replace(" ◉ ", "   ");
        }
        console.log(map);
        Island.act--;
        if (Island.act == 0) {
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
        if (Island.h == 8) {
          console.log("無法向右");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position + 4;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        Island.h = parseInt((Island.position - 7 - 36 - 2 - (Island.v - 1) * 72) / 4 + 1);
        console.log(Island.v, Island.h);
        Island.act--;
        map = map.replace("│ ◉ │   │", "│   │ ◉ │");
        console.log(map);
        if (Island.act == 0) {
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
        if (Island.h == 1) {
          console.log("無法向左");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position - 4;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        Island.h = parseInt((Island.position - 7 - 36 - 2 - (Island.v - 1) * 72) / 4 + 1);
        console.log(Island.v, Island.h);
        Island.act--;
        map = map.replace("│   │ ◉ │", "│ ◉ │   │");
        console.log(map);
        if (Island.act == 0) {
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
        if (Island.v == 7) {
          console.log("無法向下");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position + 72;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        console.log(Island.v, Island.h);
        map = map.replace("│ ◉ │", "│   │");
        // console.log(map)
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h; i++) {
          map = map.replace("│   │", "│ ◉ │");
        }
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h - 1; i++) {
          map = map.replace("│ ◉ │", "│   │");
        }
        console.log(map);
        Island.act--;
        if (Island.act == 0) {
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
let Island = { day: 1, act: 40, food: 3, position: 480, v: 7, h: 1 };
Island.cover =`
####################################################################################################
######################### ########################################################## ###############
##### ######    ######### #####     ############  ####   #######  #### #############  #####    #####
####  ##         ######## ####   #   ###########  ####    ######  #### #############  ###        ###
####  ##########  ####### ###  ##### ###########  #####   #####  ##### ############      ######  ###
####  ## #######  ####            ##  ####               ######  #####  #     ###        ####### ###
##    ## ######  ######     # #   ##  ####     #  #############              ################### ###
##        ####  ######### ### ######  ##########  ############      ##  ###########     ######## ###
###  ##   ###  #########  ##      ##  ##########  ####  ######  ######  ##########      ######## ###
### ### #####  ########       ## ###  ####   ###  ###   ######  ######  #######################  ###
##  ##  ######  ######  #     ######  ####     #  ##   ####### #######      #######    #         ###
##  ##  ######  ###### ## ###  ####  ########  #  ##  #######  ##            #####     #        ####
##  #  #          ####### ###       ############  #  ###########    ##  ############  ###  #########
##  #  ##         ############### ##############  #  #################  ##########      #  #########
##  #  ######## #######  #  ##  ##  ########   #  ##    ##############  ########## ###  #  #########
###   ######### ####### ##  ###  #   #####     #  ####    ############  #########  ###  #  #########
###   ########  ######  ##  #### ##  #####  ####  ##################         #####  ##  #  #####  ##
####    ###     ######  ##  #   ####  ##########  ############                ####     ##         ##
#### #  ####   ####### ####    ################## ########################################      ####
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
################    ##     ###     ##   ###    ####      #  ### #      #     ##    #################
######### ###### ##  #  ##  #  #####  ## ## ##  ###  #####  ### ###  ###  ##### ##  ##### ##########
#########    ### ##  #  ##  #  #####  ####. #######  #####   ## ###  ###  ##### ### ###   ##########
############  ##     #     ##     ###    ##    ####     ##    # ###  ###     ##     #  #############
###########   ##   ###  #  ##  ########  #####  ###  #####  # # ###  ###  ##### #  ##    ###########
#########   #### #####  ## ##  ##### ### #  ##  ###  #####  #   ###  ###  ##### ##  ###W  ##########
################ #####  ##  #      #     ##     ###      #  ##  ###  ###     ## ### ################
####################################################################################################
####################################################################################################
`
console.log(Island.cover)
console.log(Island)

start(Island);

const tree =`
              f                         
               L                        
               LL                       
               ,GGi                     
                GGi;                    
                DDii                    
                fDDiD                   
                 DDi;                   
        :;.      EEi;;     jGGL.        
     .;;;;;;if   EDi;;   LDDGGGLLf      
    ;;;;;;;;ii;D.EKi;;  DEDDDGGGLLfj    
   .;;;;;;;i;;;;KKKii;;EEEEDjtGGLLLj    
   fLLGG;i;iiiii;KKii;;EEiiiiiii;jfjf.  
  fffLGGDDDiiiiiiKKii;K;iiiiiiiii;;ffj  
 .fLLGGGDDEEEKKiiGKiiKiiiii;ii;   ;;;j, 
 ffLLL.tDDEEEKKKWiWiWiiiiKi          fj 
jf        EEKKiitWjWfiiW;iiiiLD         
         GiiK;;iiWiiiWiiiiiiii;;        
        iiii;;;iiiiiiii;WKKEEi;;;L      
       iiiiK;;;;WiiiiiiWKKKEEEDD;;j     
      ;iiiE;;;;jWLLfiiiiKKKEEEDDGG;,    
     ;;;i;E;;;;WLfffiiiiiKKEEDDDGGL;    
     ;;;iE;;;;KGfttjLiiWiKKEE:DD;GLL;   
    ;;;DDE;;;KLGftijLiiW;i  G DD GLLf,  
    ;;;GDE;;EKfjfjtjLKiKKiK      GLLff  
   ;;LGGD.;;EEftLfGL,WiKKK;       Lffff 
   ;LL G ;;EEEfttGfjLKiKKK;         fjj 
   jLL.  ;EtEELfjLjtjLiKKEEE         fjj
    f.   ;D E  LLLttjL;KEEE;           j
        tGD    i.tfjf  , EE;           :
        GG    ;i;;DL    EEDD            
        G     iii,EE    E:DD            
              ,:. DE      DG            
              ii; DG     jGG            
           .  ii. D       GG            
      .  .    i:i D       LL      .  .  
     .       .i.i L       LL    . .     
             iii,         jL            
             ttt           f            
             tt.                        
             tt:                        
             ttt                        
             ttt                        
             ttt                        
            ;ttt                        
            jtt,                        
            j:::                        
            jjj,                        
            jjjj                        
            jjji                        
            j;::                        
            jjj:                        
            jjj;                        
            jjjf                        
            jjff                        
            jjjf   .                    
           .  . .                       
             .                          
         . .                      .     
`

// console.log(tree)