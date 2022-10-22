/**
 *  Task:
 *      Palindrome Numbers
 */

const n1 = 121;         // Output: true
const n2 = 1234321;     // Output: true
const n3 = 23455432;    // Output: true
const n4 = -353;        // Output: false
const n5 = 5;           // Output: true
const n6 = 120;         // Output: false

const isPalindromeNumber = n => {
    if (n < 0) return false;
    if (n < 10) return true;
    if (n % 10 === 0) return false;

    let reversedN = 0;

    while (n > reversedN) {

        console.log({n, reversedN});
        
        reversedN *= 10;
        reversedN += n % 10;
        n = Math.trunc(n / 10);
    };

    console.log({n, reversedN});

    return n === reversedN || n === Math.trunc(reversedN / 10);
};

console.log(n1, 'is palindrome number?', isPalindromeNumber(n1));
console.log(n2, 'is palindrome number?', isPalindromeNumber(n2));
console.log(n3, 'is palindrome number?', isPalindromeNumber(n3));
console.log(n4, 'is palindrome number?', isPalindromeNumber(n4));
console.log(n5, 'is palindrome number?', isPalindromeNumber(n5));
console.log(n6, 'is palindrome number?', isPalindromeNumber(n6));