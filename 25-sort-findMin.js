// 25.Using sort, Write a JavaScript function to get the min element of an array of numbers

let numbers = [5, 1, 3, 8, 4];

function findMin(array) {
    let sorted = array.sort()
    let min = sorted[0];
    return min;
}

console.log(findMin(numbers))