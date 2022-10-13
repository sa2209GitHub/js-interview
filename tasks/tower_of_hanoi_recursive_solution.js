/**
 *  Task:
 *      Tower of Hanoi.
 *      Recursive solution
 */

const source = [90, 80, 60, 50, 40, 30, 20];
const buffer = [];
const destination = [];
const quantity = source.length;

const moveDisk = (from, to) => {
    to.push(from.pop());
    console.log('Source:', source, source.length);
    console.log('Buffer:', buffer, buffer.length);
    console.log('Destination:', destination, destination.length);
};

const moveTower = (qty, from, to, using) => {
    if (qty > 0) {
        moveTower(qty - 1, from, using, to);
        moveDisk(from, to);
        moveTower(qty - 1, using, to, from);
    };
};

moveTower(quantity, source, destination, buffer);