/**
 *  Task:
 *      Make setTimeout()
 *      work properly
 */

// Does not work properly
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
};

// First solution
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
};

// Second solution
for (var i = 0; i < 3; i++) {
    setTimeout((i) => {
        console.log(i)
    }, 0, i);
};

// Third solution
for (var i = 0; i < 3; i++) {
    (function(i) {setTimeout(() => {
        console.log(i);
    }, 0);})(i);
};

// Fourth solution
const foo = (counter) => {
    console.log(counter);
};

for (var i = 0; i < 3; i++); {
    setTimeout(() => foo(i), 0);
};
