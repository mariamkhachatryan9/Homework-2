//8․ Create a function that is receiving a string argument and checks if it is a palindrome using pop()

let str = "anna";

function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string.pop()) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(str.split("")))