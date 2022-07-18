// 33.* Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter

Array.prototype.myFilter = function (func) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if ((func(this[i]))) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray;
}
console.log([2, 4, 5, 7].myFilter((function (val) {
    if (val % 2 == 0) {
        return true;
    } else {
        return false;
    }
})))