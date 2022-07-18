// filter() 
// 31. Using the filter, write a JavaScript function to clone an array 

let array = [2, 4, 5, 6];

function cloneArray(array) {
    let newArray = [];
    array.filter(function (val) {
        return newArray.push(val);
    })
    return newArray;
}
console.log(cloneArray(array));