/**
 *  Task:
 *      Override 'this' in
 *      .call(), .apply() and .bind()
 *      functions
 */

// Example 1: .call() and .apply()
const car = {
    brand: 'Mercedes-Benz',
};

const sportcar = {
    brand: 'Subaru',
    drive: function(a, b, c) {
        console.log(`${this.brand}: Wrrrr! Wrrrrrrr!`);
        console.log(a, b, c);
    },
};

sportcar.drive('A', 'B', 'C');

sportcar.drive.call(car, 'A', 'B', 'C');

sportcar.drive.apply(car, ['A', 'B', 'C']);

// Example 2: .call(), .apply() and .bind()

const employeeFirst = {
    name: 'Emma',
    position: 'Project manager',
    salary: 1200,
};

const employeeSecond = {
    name: 'Noah',
    position: 'Junior developer',
    salary: 800,
};

const employeeThird = {
    name: 'Lucas',
    position: 'Senior enginer',
    salary: 1800
};

function promote(newPosition, salaryRise) {
    this.position = newPosition;
    this.salary += salaryRise;

    return `${this.name} is ${this.position} and earns $${this.salary}`
};

console.log(employeeFirst);
console.log(employeeSecond);
console.log(employeeThird);

// .call()
promote.call(employeeFirst, 'Department head', 700);

// .apply()
promote.apply(employeeSecond, ['Middle developer', 400]);

// .bind()
// const promoteLucas = promote.bind(employeeThird);
// promoteLucas('Chief technology officer', 900);
// const promoteLucas = promote.bind(employeeThird, 'Chief technology officer');
// promoteLucas(900);
const promoteLucas = promote.bind(employeeThird, 'Chief technology officer', 900);
promoteLucas();

console.log(employeeFirst);
console.log(employeeSecond);
console.log(employeeThird);