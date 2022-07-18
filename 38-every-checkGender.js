// 38.Write a function to check if all employees are Male

function checkGender(employees){
    let checked = employees.every(function(val){
        return val.gender === "Male"
    })
    return checked;
}
console.log(checkGender(employees));