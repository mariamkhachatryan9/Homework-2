//2․ Create a function that is receiving a collection of employees and using toString() returns a string with 
// comma-separated `email: salary

function getEmailsAndSalaries(employees) {
    return employees.map(function (value) {
        return value.email + ": " + value.salary
    }).toString();
}
console.log(getEmailsAndSalaries(employees));
