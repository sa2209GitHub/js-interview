/**
 *  Task:
 *      Declarative, functional,
 *      and prototypal Inheritance
 */

// Declarative inheritance
class Cat {
    constructor(name) {
        this.name = name;
    };

    getName() {
        return this.name;
    };
};

class Bobcat extends Cat {
    constructor(name) {
        super(name)

        this.weight = 33;
        this.color = 'red'
    };
};

const david = new Bobcat("David");
console.log(`name: ${david.getName()}, weight: ${david.weight}, color: ${david.color}`);

// Functional inheritance
function Animal(animalName) {
    const name = animalName;

    this.getName = function() {
        return name;
    };
};

function Elk(animalName) {
    Animal.call(this, animalName);

    this.weight = 430;
    this.color = 'brown';
}

const paul = new Elk('Paul');
console.log(`name: ${paul.getName()}, weight: ${paul.weight}, color: ${paul.color}`);

// Prototypal Inheritance
function Vehicle(brandname) {
    const brand = brandname;

    this.getBrandname = function() {
        return brand;
    };
};

function Motobike() {
    this.color = 'silver';
    this.speed = 376;
};

const motobike = new Vehicle('Suzuki');
Motobike.prototype = motobike;
var suzuki = new Motobike();
console.log(`brandname: ${suzuki.getBrandname()}, max.speed: ${suzuki.speed}kph, color: ${suzuki.color}`);