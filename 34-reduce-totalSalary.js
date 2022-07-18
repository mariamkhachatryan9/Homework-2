// reduce()
// 34.Using reduce write a function that returns the total salary of all employees

function totalSalary(employees) {
    let sumOfSalaries = employees.reduce(function (aggr, val) {
        return aggr + parseInt(val.salary.substring(1));
    }, 0)
    return sumOfSalaries;
}

console.log(totalSalary(employees));