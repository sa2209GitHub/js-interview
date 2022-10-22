/**
 *  Task:
 *      Longest Palindrome
 *      Substring
 */

const string1 = 'babad';        // 'bob' | 'aba'
const string2 = 'cbbd';         // 'bb'
const string3 = 'mississippi';  // 'ississi'
const string4 = 'ac';           // 'a' | 'c'
const string5 = 'x';            // 'x'

const getPailindromeSubstring = (str) => {
    let start = 0;
    let end = 0;

    for (let i = 0; i < str.length; i++) {
        let l1 = expandFromCenter(str, i, i);
        let l2 = expandFromCenter(str, i, i+1);
        let len = Math.max(l1, l2);

        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2);
            end = Math.floor(i + (len / 2));
        };
    };

    function expandFromCenter(str, l, r) {
        while (l >= 0 && r < str.length && str[l] === str[r]) {
            l--;
            r++;
        };
        return r - l - 1;
    };

    return str.slice(start, end + 1);
};

console.log(string1, getPailindromeSubstring(string1));
console.log(string2, getPailindromeSubstring(string2));
console.log(string3, getPailindromeSubstring(string3));
console.log(string4, getPailindromeSubstring(string4));
console.log(string5, getPailindromeSubstring(string5));