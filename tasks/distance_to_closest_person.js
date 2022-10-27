/**
 *  Task:
 *      Distance
 *      to Closest Person
 */

const array1 = [1, 0, 0, 0, 1, 0, 1];       // 2
const array2 = [1, 0, 0, 0];                // 3
const array3 = [1, 0, 0, 0, 1, 0, 0, 0];    // 3
const array4 = [0, 0, 0, 1, 0, 0, 0, 1];    // 3

const getMaxDistanceToClosest = seats => {
    let maxDistance = 0;
    let vacancies = 0;
    let current = 0;

    if (seats[current] === 0) {
        while (seats[current] === 0) {
            current++;
            vacancies++
        };
        
        maxDistance = vacancies;
        vacancies = 0;
    };

    for (let i = 0; i < seats.length; i++) {
        current = seats[i];

        if (i === seats.length - 1 && current === 0) {
            vacancies++;
            maxDistance = Math.max(maxDistance, vacancies);
        };

        if (current === 1) {
            vacancies = 0;
        } else {
            vacancies++;
            maxDistance = Math.max(maxDistance, Math.ceil(vacancies / 2));
        };
    };

    return maxDistance;
};

console.log(getMaxDistanceToClosest(array1));
console.log(getMaxDistanceToClosest(array2));
console.log(getMaxDistanceToClosest(array3));
console.log(getMaxDistanceToClosest(array4));