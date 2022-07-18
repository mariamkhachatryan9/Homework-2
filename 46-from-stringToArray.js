// 46․ Using from, turn the string into an array

let str = "hello";

function stringToArray(str){
    return Array.from(str);
}

console.log(stringToArray(str));