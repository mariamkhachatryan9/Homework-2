// 12.* Create a custom Array.prototype.myPush should work similarly to Array.prototype.push

let array = [1, 2, 3, 4];
let pushArray = [5, 6, 7, 8];

Array.prototype.myPush = function (pushArray) {
    for (let i = 0; i < pushArray.length; i++) {
        this[this.length++] = pushArray[i];
    }
    return this;
}
console.log(array.myPush(pushArray));