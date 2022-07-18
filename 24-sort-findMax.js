// 24.Using sort, Write a JavaScript function to get the max element of an array of numbers

let numbers = [5, 1, 3, 8, 4];

function findMax(array) {
    let sorted = array.sort()
    let max = sorted[sorted.length - 1];
    return max;
}

console.log(findMax(numbers))