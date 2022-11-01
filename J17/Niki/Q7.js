//Q7 印出下圖，並轉 90°

input = `
  ** ** 
 ******* 
*********
*********
 *******
  *****
   ***
    *
`



function maxLength (array){
    let length = 0 ;
    for (let i of  array) {
        length = i.length>length ? i.length : length;
    };
    return length
}

function sameLength (array,length){
    for (let i =0 ; i <array.length;i++) {
        array[i] = array[i].padEnd(length)
    };
}



function arrayRotate (string) {
    let spiltString = string.split("\n");
    sameLength(spiltString,maxLength (spiltString));
    let endArray = []; 
    for (let i = 0; i<maxLength (spiltString);i++){
        endArray.push("")
        for (let j of spiltString){
            endArray[i]=endArray[i]+j[i]
        }
    }
    console.log(endArray.join ( "\n" ))
}

arrayRotate(input)