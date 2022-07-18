// join()
//4․ Create a function that is receiving a collection of employees and returns a string containing emails in the following format
// email1@example.com//email2@example.com//email3@example.com

function getEmails(employees) {
        return employees.map(function (value) {
            return value.email;
        }).join("//");
    }
    console.log(getEmails(employees));