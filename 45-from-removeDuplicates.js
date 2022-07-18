// 45.Using from, and Set create a function that is removing duplicates from an array  

let array  = [2,4,4,5,5,5,6,6,6,7];

function removeDuplicates(array){
    return Array.from(new Set(array));
}

console.log(removeDuplicates(array));
