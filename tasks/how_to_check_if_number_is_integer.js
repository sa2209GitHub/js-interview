/**
 *  Task:
 *      How to check
 *      if Number is Integer
 */

let n = 42;       // must returns true
    // n = Math.PI;  // must returns false


// 1. Number.isInteger()
console.log(`Number.isInteger(${n}) =`, Number.isInteger(n));
console.log(`Number.isInteger(${n}) =`, Number.isInteger(n));

// 2. Polyfill for Number.isInteger
console.log(`typeof ${n} === 'number' && isFinite(${n}) && Math.floor(${n}) === n =`,
             typeof n === 'number' && isFinite(n) && Math.floor(n) === n);
console.log(`typeof ${n} === 'number' && isFinite(${n}) && Math.floor(${n}) === n =`,
             typeof n === 'number' && isFinite(n) && Math.floor(n) === n);

// 3. parseInt()
console.log(`${n} === parseInt(${n}, 10) =`, n === parseInt(n, 10));
console.log(`${n} === parseInt(${n}, 10) =`, n === parseInt(n, 10));

// 4. Using %
console.log(`${n} === Number(${n}) && ${n} % 1 === 0 =`, n === Number(n) && n % 1 === 0);
console.log(`${n} === Number(${n}) && ${n} % 1 === 0 =`, n === Number(n) && n % 1 === 0);
console.log(`!(${n} % 1) =`, !(n % 1));
console.log(`!(${n} % 1) =`, !(n % 1));

// 5. Bitwise OR
console.log(`${n} === ${+n} && ${n} === (${n} | 0)`, n === +n && n === (n | 0));
