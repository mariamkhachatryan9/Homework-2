// 49. Write a function to find the difference of two arrays
let arr1 = [4, 5, 6, 8, 4, 9];
let arr2 = [4, 5, 6, 7];

function findDifference(arr1, arr2) {
    let dif1 = arr1.filter(val => arr2.indexOf(val) === -1);
    let dif2 = arr2.filter(val => arr1.indexOf(val) === -1);
    return [...dif1,...dif2];
}
console.log(findDifference(arr1, arr2))