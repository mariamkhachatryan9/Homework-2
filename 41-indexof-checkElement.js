// indexOf() 
//41․ Write a function which is checking if a given element contains inside an array
let array = [4, 4, 5, 6]

function checkElement(array, n) {
    return array.indexOf(n) !== -1;
}
console.log(checkElement(array, 7));