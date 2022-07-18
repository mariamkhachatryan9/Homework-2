// 14.* Create a custom Array.prototype.myUnshift should work similarly to Array.prototype.unshift
// unshift() method is used to add one or more elements to the beginning of the given array. 

let array = [2, 4, 5, 6]
let n = 4

Array.prototype.myUnshift = function (n) {
    let i = array.length - 1;
    while (i > 1) {
        array[i] = array[i-1];
        array[0] = n;
        i--;
    }
}
console.log(array.myUnshift(n));
