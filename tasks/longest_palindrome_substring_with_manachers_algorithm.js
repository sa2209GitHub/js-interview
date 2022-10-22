/**
 *  Task:
 *      Longest Palindrome Substring
 *      with Manacher's Algorithm
 */

const str1 = 'babad';        // 'bob' | 'aba'
const str2 = 'cbbd';         // 'bb'
const str3 = 'mississippi';  // 'ississi'
const str4 = 'ac';           // 'a' | 'c'
const str5 = 'x';            // 'x'
const str6 = 'aaabaa';       // 'aabaa'

const interleave = str => `|${str.split('').join('|')}|`;

const getLongest = (str, pal) => {
    
    const [length, index] = pal.reduce((max, x, i, arr) => x > arr[max[1]] ? [x, i] : max, [0, 0]),
        startIndex = (index - length) / 2 | 0;
    
    return str.substring(startIndex, startIndex + length);
}

const findLongestPalindromicString = str => {

    if (str.length === 1) {
        return str[0];
    }
    
    const preprocessed = interleave(str),
        lengths = [];
    
    //Center and end indexes for the current palindrome
    let center = 0,
        end = 0;

    //getting the palindromes lengths array
    for (let i = 0, l = preprocessed.length; i < l; i++) {
        
        lengths[i] = end > i ? Math.min(end - i, lengths[center - (i - center)]) : 0;

        // calculate length of ith palindrome 
        while ((preprocessed[i + 1 + lengths[i]] === preprocessed[i - 1 - lengths[i]])) {
            lengths[i]++;
        }

        //reset palindrome center if there are no more intersections
        if (end < i + lengths[i]) {
            center = i;
            end = i + lengths[i];
        }
    }
    
    const result = getLongest(str, lengths);
    return result;
};

console.log(str1, ':', findLongestPalindromicString(str1));
console.log(str2, ':', findLongestPalindromicString(str2));
console.log(str3, ':', findLongestPalindromicString(str3));
console.log(str4, ':', findLongestPalindromicString(str4));
console.log(str5, ':', findLongestPalindromicString(str5));
console.log(str6, ':', findLongestPalindromicString(str6));