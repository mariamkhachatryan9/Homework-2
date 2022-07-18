//   toString()
// 1․ Create a function that is receiving a collection of employees and using toString() 
// returns a string with comma-separated full names

function getFullNames(employees) {
    return employees.map(function (value) {
        return value.firstName + " " + value.lastName
    }).toString();
}
console.log(getFullNames(employees));