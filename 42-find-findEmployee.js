// find()
//42. Create a function that will find the employee by the provided name 

function findEmployee(employee,name){
    let found = employee.find(function(val){
        return  val.firstName === name;
    })
    return found;
}
console.log(findEmployee(employees, "Bryant"))