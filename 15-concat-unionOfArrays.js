// concat()
// 15. Using concat compute the union of two arrays and then remove all duplicated items if they exist

let arr1 = [1, 2, 2, 6];
let arr2 = [4, 5, 7, 4];

function unionOfArrays(array1, array2) {

    let newArray = array1.concat(array2);
    let uniqueElements= newArray.filter((element, index) => {
        return newArray.indexOf(element) === index;
    });
    return uniqueElements;
}
console.log(unionOfArrays(arr1, arr2))
