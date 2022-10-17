/**
 *  Task:
 *      Valid Parentheses
 */

const brackets1 = '(]';              // false
const brackets2 = '{[]}';            // true
const brackets3 = '([)]';            // false
const brackets4 = '{[[]{}]}()()';    // true

const isValid = (string) => {

    if (string.length % 2) {
        return false;
    }

    let stack = [];
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0; i < string.length; i++) {
        const current = string[i];

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) {
                return false;
            }
            
        } else {
            stack.push(current);
        };
    };

    return true;
};

const isClosedBracket = (character) => {
    return [')', ']', '}'].indexOf(character) !== -1;
};

console.log(isValid(brackets1));
console.log(isValid(brackets2));
console.log(isValid(brackets3));
console.log(isValid(brackets4));