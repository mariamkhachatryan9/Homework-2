// 27*** Create a custom Array.prototype.mySort should work similarly to Array.prototype.sort

let array = [5, 4, "a", 3, "z", "A", 2, true, -5];

Array.prototype.mySort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i].toString() > this[j].toString()) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
console.log(array.mySort());