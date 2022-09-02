let timeoutID = setInterval((()=>console.log("hello")),1000);

// clearTimeout(timeoutID)

// let timeoutID2 = setTimeout((()=>clearInterval(timeoutID)),5000);


let timeoutID3 = setTimeout((()=>clearTimeout(timeoutID)),10000);
