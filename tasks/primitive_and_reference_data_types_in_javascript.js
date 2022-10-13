/**
 *  Task:
 *      Primitive and Reference
 *      Data Types in JavaScript
 */

let counter = 1;

// Primitive data types

// Number
console.log(counter++, 'primitive data type:', typeof(3.14))
const num1 = 54;
const num2 = 3.14;
const num3 = 0x1f;
const num4 = 0b01011;
const num5 = Math.LN2;
const num6 = Math.PI;
const num7 = NaN;
const num8 = Infinity;
const num9 = -Infinity;
console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, '\n');

// String
console.log(counter++, 'primitive data type:', typeof('String'))
const str1 = "Hello";
const str2 = ', ';
const str3 = `JavaScript`;
const str4 = str1 + str2 + str3 + '!';
console.log(str4, '\n');

// Boolean
console.log(counter++, 'primitive data type:', typeof(!!null));
const bool1 = false;
const bool2 = true;
const bool3 = 3 === 6;
const bool4 = !0;
const bool5 = !!null;
console.log(bool1, bool2, bool3, bool4, bool5, '\n');

// Null
console.log(counter++, 'primitive data type:', typeof(null), '<< JavaScript BUG');
const nothing = null;
console.log(nothing, '\n')

// Undefined
console.log(counter++, 'primitive data type:', typeof(undefined))
let undef1;
const undef2 = undefined;
console.log(undef1, undef2, '\n');

// BigInt
console.log(counter++, 'primitive data type:', typeof BigInt(1000));
const big1 = BigInt(99);
const big2 = BigInt(9999);
const big3 = 999999n;
const big4 = 99999999n;
const big5 = 9999999999n;
const big6 = 999999999999n;
console.log(big1, big2, big3, big4, big5, big6, '\n');

// Symbol
console.log(counter++, 'primitive data type:', typeof(Symbol()));
const symb1 = Symbol();
const symb2 = Symbol('MySymbol');
console.log(symb1, symb2, '\n');


// Reference data types

// Object
console.log(counter++, 'reference data type:', typeof(new Number(Math.PI)));
const obj1 = new Number(Math.PI);
const obj2 = new String('Hello, JavaScript!')
const obj3 = {
    firsname: 'John',
    lastname: 'Doe',
    age: 32,
}
const arr = [
    'first',
    'second',
    'third'
];
console.log(typeof(obj1), ':', obj1);
console.log(typeof(obj2), ':', obj2);
console.log(typeof(arr), ':', arr, '\n');


// Function
console.log(counter++, 'reference data type:', typeof(function foo(){}));
function fn1() {
    return;
};
const fn2 = () => {
    return;
};
const fn3 = fn2;

console.log(typeof(fn1), fn1);
console.log(typeof(fn2), fn2);
console.log(typeof(fn3), fn3);