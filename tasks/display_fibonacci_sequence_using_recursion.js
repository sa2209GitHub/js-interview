/**
 *  Task:
 *      Display fibonacci sequence
 *      using recursion
 */

const fibonacciSequence = []

const displayFibonacciSequence = positiveInteger => {
    if (positiveInteger < 2)
        return positiveInteger;

    return displayFibonacciSequence(positiveInteger - 1) + displayFibonacciSequence(positiveInteger -2);
};

for (let i = 0; i < 12; i++) {
    console.log(fibonacciSequence.push(displayFibonacciSequence(i)));
};

console.log(fibonacciSequence);
