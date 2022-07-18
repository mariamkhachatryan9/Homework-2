// some() 
//39. Write a function that will ensure that there are Females in the list of employees

function checkGender(employees) {
    let checked = employees.some(function (val){
        return val.gender === "Female"
    })
    return checked;
}
console.log(checkGender(employees));