//18. Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers

let array = [1, 2, 2, 2, 3, 4, 5, 5, 6]

function removeDuplicates(array) {
    let i = 0;
    while (i < array.length - 1) {
        if (array[i] === array[i+1]) {
            array.splice(i, 1);
            continue;
        }
        i++;
    }
    return array;
}

console.log(removeDuplicates(array))