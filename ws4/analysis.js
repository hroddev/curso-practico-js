
// Helpers

function isEven(num) {
    return (num % 2 === 0);
 }
 
 function calArithmeticAverage(list) {
 
     const sumList = list.reduce(
         function (accumulatedValue = 0, newElement) {
             return accumulatedValue + newElement;
         }
     )
     const averageList = sumList / list.length;
     return averageList;
 }
// ###############################

const salaryCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const sortSalary = salaryCol.sort (
    function (a, b) {
        return a - b;
    }
);

function salaryMedian(list) {
    const middle = parseInt(list.length / 2);
    const middlePerson1 = list[middle -1];
    const middlePerson2 = list[middle];
    
    if (isEven(list.length)) {
        const median = calArithmeticAverage([middlePerson1,middlePerson2])
        return median;

    } else {
        const middlePerson = list[middle];
        return middlePerson;
    }
}

const generalMedianCol = salaryMedian(sortSalary);

// Top 10 median
const spliceStart = (sortSalary.length * 90) / 100;
const spliceCount = sortSalary.length - spliceStart;

const salaryColTop10 = sortSalary.splice(
    spliceStart,
    spliceCount,
);

const medianTop10Col = salaryMedian(salaryColTop10);

console.log({
    generalMedianCol,
    medianTop10Col
});