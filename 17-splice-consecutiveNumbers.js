// splice()
//17. Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive.
// Example: [1,2,3,6] should become [1,2,3,4,5,6]


let array = [1, 2, 3, 6];

function consecutiveNumbers(array) {
    let i = 0;
    while (i < array.length - 1) {
        if (array[i + 1] - array[i] !== 1) {
            array.splice(i + 1, 0, array[i] + 1);
        }
        i++;
    }
    return array;
}
console.log(consecutiveNumbers(array));