//Q13 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?

let distant = 1000;
let turtle={speed:0.28,time:distant/0.28}
let rabbit={Speed:20}


rabbit.time = (function(distant,Speed){
    let  time = 1;
    while ( distant >= 0){
        if (distant <= Speed){
            time=time-1+distant/Speed;
            return time;
        } else {
            distant=distant-Speed+concession(time)
            // console.log(i, distant)
            time++
        }
    }})(1000,20)



console.log("兔子還可以偷懶休息 "+Math.floor(turtle.time-rabbit.time)+" 秒鐘")

function concession(time){ //兔子讓步
    if (time%5 === 0) {
        return 1
    } else  {
        return 0
    }
}