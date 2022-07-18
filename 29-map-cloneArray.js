// 29.Using the map, write a function to clone an array

let array = [2, 4, 5, 6];

function cloneArray(array) {
    return array.map(function (val) {
        return val;
    })
}
console.log(cloneArray(array));