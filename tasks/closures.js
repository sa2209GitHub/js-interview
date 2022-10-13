/**
 *  Task:
 *      Closures
 */

// Example 1
function makeGreeting() {
    const myName = 'Alex';

    function greeting(personName) {
        return `Hello, ${personName}! My name is ${myName}`;
    };

    return greeting;
};

const newGreeting = makeGreeting();
console.log(newGreeting('Bill'));

// Example 2
function createCalcFunction(n) {
    return function() {
        console.log(n * 1000);
    };
};

const calc = createCalcFunction(42);
calc();

// Example 3
function createIncrementor(n) {
    return function(num) {
        return n + num;
    };
};

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);
console.log(addOne(10));
console.log(addTen(10));

// Example 4
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    };
};

const comUrl = urlGenerator('com');
const orgUrl = urlGenerator('org');
const eduUrl = urlGenerator('edu');
const govUrl = urlGenerator('gov');

console.log(comUrl('google'));
console.log(comUrl('rutracker'));
console.log(eduUrl('yale'));
console.log(govUrl('dotgov'));

// Example 5
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
};

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args);
    };
};

const person1 = { name: 'Paul', age: 32, job: 'Software Developer'};
const person2 = { name: 'Noah', age: 28, job: 'System Administrator'};

bind(person1, logPerson)();
bind(person2, logPerson)();