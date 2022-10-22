/**
 *  Task:
 *      How to make
 *      an Integer from Float
 */

const floatNumber = 123.456789;

// 1. ES6 Way
console.log(`Math.trunc(${floatNumber}) =`, Math.trunc(floatNumber));

// 2. Round
console.log(`Math.round(${floatNumber}) =`, Math.round(floatNumber));
console.log(`Math.ceil(${floatNumber}) =`, Math.ceil(floatNumber));
console.log(`Math.floor(${floatNumber}) =`, Math.floor(floatNumber));
console.log(`parseInt(${floatNumber}) =`, parseInt(floatNumber, 10), '\n');

// 4. Int32Array
const newInt32Array = new Int32Array([floatNumber]);
console.log(`const newInt32Array = new Int32Array(${floatNumber})\n      newInt32Array[0] =`, newInt32Array[0], '\n');

// 5. Bitwise OR
console.log(`${floatNumber} | 0 = `, floatNumber | 0);

// 5. Bitwise NOT
console.log(`~~ ${floatNumber} = `, ~~ floatNumber);
console.log(`~~ 2.0 =`, ~~ 2.0);