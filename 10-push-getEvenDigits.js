// 10․ Create a function that is receiving a number and returns an array which is containing all even digits. Use push method

let number = 2743579;

function getEvenDigits(number) {
    let array = [];
    let a = 0;

    while (number > 0) {
        let temp = number % 10;
        a = a * 10 + temp;
        number = (number - temp) / 10;
        if (temp % 2) {
            array.push((temp))
        }
    }
    return array;
}

console.log(getEvenDigits(number));