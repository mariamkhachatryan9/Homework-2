// pop()
//7․ Create a function that is receiving an array and returns reversed one using pop()

let array = [1, 2, 3, 4];
function getReversedArray(array) {
    let reversedArray = [];
    while (array.length > 0) {
        reversedArray.push(array.pop());
    }
    return reversedArray;
}
console.log(getReversedArray(array));