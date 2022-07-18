// 21.Using slice, Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array

let array = [2, 4, 5, 6];
let n;

function findLastElement(array, n) {
    let sliced = array.slice(-n);
    return sliced;
}
console.log(findLastElement(array, 3))
