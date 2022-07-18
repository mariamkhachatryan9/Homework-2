//20. Using slice, write a JavaScript function to clone an array

let array = [1,2,2,3,4,5,5,6]

function cloneAnArray(array){
    let result = array.slice()
    return result;
}

console.log(cloneAnArray(array))