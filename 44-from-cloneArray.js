// from
// 44.Using from, write a JavaScript function to clone an array

let array  = [2,4,5,6];

function cloneArray(array){
    let result = Array.from(array,function(val){
        return val;
    })
    return result;
}

console.log(cloneArray(array));
