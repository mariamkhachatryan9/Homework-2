// *16. Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

Array.prototype.myConcat = function (secondArray) {
    let combined = [...this, ...secondArray]
    return combined;

}
console.log(arr1.myConcat(arr2).myConcat(arr3));