/**
 *  Task:
 *      Valid Parentheses
 */

const brackets1 = '()';             // true
const brackets2 = '()[]{}'          // true
const brackets3 = '(]';             // false
const brackets4 = '{[]}';           // true
const brackets5 = '([)]';           // false
const brackets6 = '{[[]{}]}()()';   // true

const isValid = (string) => {
    let stack = [];
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0; i < string.length; i++) {
        const current = string[i];

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop())
                return false;
        } else {
            stack.push(current);
        };
    };

    return stack.length === 0;
};

const isClosedBracket = (character) => {
    return [')', ']', '}'].indexOf(character) !== -1;
};

console.log(brackets1, isValid(brackets1));
console.log(brackets2, isValid(brackets2));
console.log(brackets3, isValid(brackets3));
console.log(brackets4, isValid(brackets4));
console.log(brackets5, isValid(brackets5));
console.log(brackets6, isValid(brackets6));