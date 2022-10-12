/**
 *  Task:
 *      Check wheter a string
 *      is a palindrome
 */

// First solution
function isPalindromeFirst(string) {

    for (let i = 0; i < string.length / 2; i++) {
        let head = string[i];
        let tail = string[string.length - (i + 1)];
        
        if (head != tail )
            return false;
    }

    return true;
}

// Second solution
const isPalindromeSecond = str => {
    return str === str.split('').reverse().join('');
};

console.log('abba:',        isPalindromeFirst('abba'));         // true
console.log('kayak:',       isPalindromeFirst('kayak'));        // true
console.log('deified:',     isPalindromeFirst('deified'));      // true
console.log('rotator:',     isPalindromeFirst('rotator'));      // true
console.log('repaper:',     isPalindromeFirst('repaper'));      // true
console.log('deed:',        isPalindromeFirst('deed'));         // true
console.log('peep:',        isPalindromeFirst('peep'));         // true
console.log('wow:',         isPalindromeFirst('wow'));          // true
console.log('noon:',        isPalindromeFirst('noon'));         // true
console.log('civic:',       isPalindromeFirst('civic'));        // true
console.log('racecar:',     isPalindromeFirst('racecar'));      // true
console.log('level:',       isPalindromeFirst('level'));        // true
console.log('mom:',         isPalindromeFirst('mom'));          // true
console.log('cat:',         isPalindromeFirst('cat'));          // false
console.log('false:',       isPalindromeFirst('false'));        // false
console.log('palindrome:',  isPalindromeFirst('palindrome'));   // false
console.log('god:',         isPalindromeFirst('god'));          // false
console.log('nvidia:',      isPalindromeFirst('nvidia'));       // false
console.log('fish:',        isPalindromeFirst('fish'));         // false
console.log('bash:',        isPalindromeFirst('bash'));         // false
console.log('for:',         isPalindromeFirst('for'));          // false
console.log('door:',        isPalindromeFirst('door'));         // false
console.log('webpack:',     isPalindromeFirst('webpack'));      // false

console.log('abba:',        isPalindromeSecond('abba'));         // true
console.log('kayak:',       isPalindromeSecond('kayak'));        // true
console.log('deified:',     isPalindromeSecond('deified'));      // true
console.log('rotator:',     isPalindromeSecond('rotator'));      // true
console.log('repaper:',     isPalindromeSecond('repaper'));      // true
console.log('deed:',        isPalindromeSecond('deed'));         // true
console.log('peep:',        isPalindromeSecond('peep'));         // true
console.log('wow:',         isPalindromeSecond('wow'));          // true
console.log('noon:',        isPalindromeSecond('noon'));         // true
console.log('civic:',       isPalindromeSecond('civic'));        // true
console.log('racecar:',     isPalindromeSecond('racecar'));      // true
console.log('level:',       isPalindromeSecond('level'));        // true
console.log('mom:',         isPalindromeSecond('mom'));          // true
console.log('cat:',         isPalindromeSecond('cat'));          // false
console.log('false:',       isPalindromeSecond('false'));        // false
console.log('palindrome:',  isPalindromeSecond('palindrome'));   // false
console.log('god:',         isPalindromeSecond('god'));          // false
console.log('nvidia:',      isPalindromeSecond('nvidia'));       // false
console.log('fish:',        isPalindromeSecond('fish'));         // false
console.log('bash:',        isPalindromeSecond('bash'));         // false
console.log('for:',         isPalindromeSecond('for'));          // false
console.log('door:',        isPalindromeSecond('door'));         // false
console.log('webpack:',     isPalindromeSecond('webpack'));      // false