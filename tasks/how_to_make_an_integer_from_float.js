/**
 *  Task:
 *      How to make
 *      an Integer from Float
 */

const floatNumber = 123.456789;

// 1. ES6 Way
console.log('1. ES6 Way', floatNumber);
console.log('   Math.trunc(floatNumber) =', Math.trunc(floatNumber), '\n');

// 2. Round
console.log('2. Round', floatNumber);
console.log('   Math.round(floatNumber) =', Math.round(floatNumber));
console.log('   Math.ceil(floatNumber) =', Math.ceil(floatNumber));
console.log('   Math.floor(floatNumber) =', Math.floor(floatNumber), '\n');

// 3. parseInt()
console.log('3. parseInt()', floatNumber);
console.log('   parseInt(floatNumber, 10) =', parseInt(floatNumber, 10), '\n');

// 4. Int32Array
console.log(`4. Int32Array([${floatNumber}])`);
const newInt32Array = new Int32Array([floatNumber]);
console.log('   const newInt32Array = new Int32Array([floatNumber])', '\n   newInt32Array[0] =', newInt32Array[0], '\n');

// 5. Bitwise OR
console.log('5. Bitwise OR', floatNumber);
console.log('   floatNumber | 0 = ', floatNumber | 0, '\n');

// 5. Bitwise NOT
console.log('6. Bitwise NOT', floatNumber);
console.log('   ~~ floatNumber = ', ~~ floatNumber);
console.log('   ~~ 2.0 =', ~~ 2.0, '\n');