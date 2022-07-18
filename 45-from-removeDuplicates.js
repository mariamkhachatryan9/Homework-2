// 45.Using from, and Set create a function that is removing duplicates from an array  

let array  = [2,4,4,5,6];

function removeDuplicates(array){
    let result = Array.from(array,function(val,i){
        val[i]===val[i++];
    })
    return result;
    // todo
}

console.log(removeDuplicates(array));