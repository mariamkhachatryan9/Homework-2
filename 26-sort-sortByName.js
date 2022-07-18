//26. Using sort, Write a JavaScript function to sort the collection of employees by their name

function sortByName(employees) {
    let sorted = employees.sort(function(a, b) {
        let nameA = a.firstName
        let nameB = b.firstName
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    return sorted;
}

console.log(sortByName(employees))