// / 11. Create a function that will receive two collections of employees and adds the items of the second
// collection to the first collection. Use push method


let firstCollection = [
    {
        "firstName": "Arabela",
        "lastName": "Fockes",
        "email": "afockes0@wired.com",
        "salary": "$6.18",
        "isEngineer": true,
        "gender": "Female"
    },
    {
        "firstName": "Bryant",
        "lastName": "Marchi",
        "email": "bmarchi1@theatlantic.com",
        "salary": "$8.05",
        "isEngineer": false,
        "gender": "Male"
    },
]

let secondCollection = [{
    "firstName": "Ritchie",
    "lastName": "Ferreira",
    "email": "rferreira3@booking.com",
    "salary": "$4.07",
    "isEngineer": true,
    "gender": "Male"
},
{
    "firstName": "Kaylyn",
    "lastName": "Ivain",
    "email": "kivain4@gmpg.org",
    "salary": "$5.89",
    "isEngineer": false,
    "gender": "Female"
}]


function mergeCollecttions(firstCollection, secondCollection) {
    secondCollection.forEach(element => {
        firstCollection.push(element);
    });

    return firstCollection;
}
console.log(mergeCollecttions(firstCollection, secondCollection));