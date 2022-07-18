// 30.Using the map write a function that returns an array containing only firstNames of all  employees 

function getFirstNames(employees) {
    return employees.map(function (val) {
        return val.firstName;
    })
}
console.log(getFirstNames(employees))