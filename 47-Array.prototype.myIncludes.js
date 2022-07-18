// 47.* Create a custom Array.prototype.myIncludes should work similarly to Array.prototype.includes

let array = [5, 4, 6, 7];

Array.prototype.myIncludes = function (n, k) {
    for (let i = k; i < array.length; i++) {
        if (array[i] === n) {
            return true;
        }
    }
    return false;
}

console.log(array.myIncludes(4, 1));