// 32․Write a function that will return only employees with salary greater than n

function filterBySalary(employees, n) {
    let filteredEmployees = employees.filter(function (val) {
        return val.salary > n;
    })
    return filteredEmployees;
}
console.log(filterBySalary(employees, "$8"))