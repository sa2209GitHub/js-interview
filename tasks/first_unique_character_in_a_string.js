/**
 *  Task:
 *      First Unique Character
 *      in a String
 */

const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  // 0
const str2 = 'JavaScript';                  // 0
const str3 = 'ECMAScript';                  // 0
const str4 = 'leetcode';                    // 0
const str5 = 'loveleetcode';                // 2
const str6 = 'abba';                        // -1

// My solution
const findUniqChar = (string) => {
    for (char of string) {
        if (string.indexOf(char) === string.lastIndexOf(char)) {
            return string.indexOf(char);
        };
    };

    return -1;
};

console.log('My solution:');
console.log(str1, findUniqChar(str1));
console.log(str2, findUniqChar(str2));
console.log(str3, findUniqChar(str3));
console.log(str4, findUniqChar(str4));
console.log(str5, findUniqChar(str5));
console.log(str6, findUniqChar(str6), '\n');

// Orthodox solution
function findUniqCharOrtodox(string) {
    const map = new Map();

    for (let i = 0; i < string.length; i++) {
        let current = string[i];

        if (map.has(current)) {
            map.set(current, map.get(current) + 1);
        } else {
            map.set(current, 1);
        };
    };

    for (let i = 0; i < string.length; i++) {
        if (map.get(string[i]) === 1) {
            return i;
        };
    };
    
    return -1;
};

console.log('Ortodox solution:');
console.log(str1, findUniqCharOrtodox(str1));
console.log(str2, findUniqCharOrtodox(str2));
console.log(str3, findUniqCharOrtodox(str3));
console.log(str4, findUniqCharOrtodox(str4));
console.log(str5, findUniqCharOrtodox(str5));
console.log(str6, findUniqCharOrtodox(str6));