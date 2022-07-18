// // 13.* Create a custom Array.prototype.myShift should work similarly to Array.prototype.shift
// The shift() method removes the element at the zeroth index and shifts the values at consecutive indexes down,
//  then returns the removed value.

let array = [4, 5, 6, 7];

Array.prototype.myShift = function () {

    let i = 0;
    while (i < array.length) {
        array[i] = array[i + 1]
        i++;
    }
    array.length = array.length - 1

    return array;
}
console.log(array[0]);
console.log(array.myShift());