// 28.Using reverse, write a function that checks if the string is a palindrome

let string = 'anana'

function checkPalindrome(string) {
    let array = string.split('');
    let reverseArray = array.reverse();
    let reverseString = reverseArray.join('');

    if(string === reverseString) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkPalindrome(string));