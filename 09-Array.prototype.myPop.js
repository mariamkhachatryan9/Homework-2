//9․ * Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop

let array = [2, 4, 5, 6, 7]
Array.prototype.myPop = function () {
    array.length = array.length - 1
    return array;
}
console.log(array.myPop());