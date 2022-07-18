// 3․ * Create a custom Array.prototype.myToString it should work similarly to Array.prototype.toString

Array.prototype.myToString = function () {
    let string = "";

    for (let i = 0; i < this.length; i++) {   
        string += "{";  
        for (const key in object) {
            string += this[i][key] + " ";
        }
        string += "}";
    }

    return string;
};
console.log(employees.myToString());