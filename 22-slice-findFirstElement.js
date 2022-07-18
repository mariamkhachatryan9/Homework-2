//22. Using slice, Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array


let array = [2, 4, 5, 6];
let n;

function findFirstElement(array, n) {
    let sliced = array.slice(0,n);
    return sliced;
}
console.log(findFirstElement(array, 3));