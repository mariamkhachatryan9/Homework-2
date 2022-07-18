// 36. Using every() create a function that is checking if all employees have a salary of more than n

function checkSalary(employees,n) {
    let salary = employees.every(function (val) {
        return val.salary > n;
    })
    return salary;
}
console.log(checkSalary(employees,"$1"));