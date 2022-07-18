// 43.Create a function that will find the employee by filter. 


function findEmployee(employee, { firstName, lastName }) {
    let result = employee.find(function (val) {
        return val.firstName === firstName && val.lastName === lastName;
    })
    return result;
}

console.log(findEmployee(employees, { firstName: `Flemming`, lastName: `Scroggins` }));    