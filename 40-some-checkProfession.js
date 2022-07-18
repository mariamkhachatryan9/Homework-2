// 40. Write a function that will ensure that there are engineers in the list of employees 

function checkProfession(employees){
    let checked = employees.some(function(val){
        return val.isEngineer === true;
    })
    return checked;
}
console.log(checkProfession(employees))