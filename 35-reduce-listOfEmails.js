// 35.Using reduce create a function that is receiving a collection of employees and returns a string containing emails in the following format 
// email1@example.com//email2@example.com//email3@example.com

function listOfEmails(employees){
    let emails = employees.reduce(function(aggr,val){
        return aggr + val.email + "//";
    },0)    
    return emails;
}
console.log(listOfEmails(employees));