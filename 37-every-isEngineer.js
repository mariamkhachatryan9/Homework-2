// 37.Using every() create a function that is checking if all 
// employees are engineers

function isEngineer(employees){
    let checked = employees.every(function(val){
        return val.isEngineer === true;
    })
    return checked;
}

console.log(isEngineer(employees));