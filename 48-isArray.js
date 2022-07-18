// 48. Write a function to check whether an `input` is an array or not. Provide 2 different solutions 

function checkArray(input){
    return Array.isArray(input);
}
console.log(checkArray([5,6,7]));

function checkArray(input){
    return toString.call(input) === '[object Array]';
}
console.log(checkArray([5,6,7]));