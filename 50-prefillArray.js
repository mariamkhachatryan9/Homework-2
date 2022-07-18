// 50.Write a function that will receive the length and the value and will return a pre-filled array
// Example: prefillArray(2, "Bla Bla")
// should return ["Bla Bla", "Bla Bla"]

function prefillArray(length, value) {
    let arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(value);
      }
      return arr;
    
}
console.log(prefillArray(5, "Bla Bla"));