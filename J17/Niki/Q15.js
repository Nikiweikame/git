//Q15 有一輛搬運車，限重1噸 (不能超重)，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。

let sportWeight = [20, 30, 50];
let sportName = ["單  槓：","啞  鈴：","跑步機："]
let sportUnit = [" 箱"," 箱"," 台"]
let sport = [0,0,0]
let weight = 0;

do {
    thisSportIndex = chooseSport(1000-weight);
    weight=weight+sportWeight[thisSportIndex];
    sport[thisSportIndex]++;
    // console.log(thisSportIndex,weight,sport)
} while (weight <= 980);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function chooseSport(remainder) {
  if (remainder >= 50) {
    return getRandomInt(3);
  } else if (remainder >= 30) {
    return getRandomInt(2);
  } else {
    return 0;
  }
}

for (let i in sportWeight){
    console.log(sportName[i] + sport[i] + sportUnit[i])
}
console.log("總  重："+weight+" kg")