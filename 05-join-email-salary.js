//5․ Create a function that is receiving a collection of employees and returns a string with comma-separated email: salary

function getEmails(employees) {
    return employees.map(function (value) {
        return `${value.email}:${value.salary}`;
    }).join(", ");
}
console.log(getEmails(employees));