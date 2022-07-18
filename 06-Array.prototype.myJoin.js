//6․ * Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join

Array.prototype.myJoin = function () {
    let joinedArray = "";

    for (let i = 0; i < this.length; i++) {
        for (const key in this[i]) {
            joinedArray += this[i][key]+',';
        }
    }

    return joinedArray;
};

console.log(employees.myJoin());