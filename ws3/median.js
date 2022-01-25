
/* const list1 = [
    100,
    200,
    500,
    40000000,
]; */

function calArithmeticAverage(list) {

    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    )
    const averageList = sumList / list.length;
    return averageList;
}

function calArithmeticMedian(list) {

    // first the sort need a function for generate the value returned, that way the sort can order the values correct.
    function compare(a, b){                         
        return a - b;
    }
    var sortList = list.sort(compare);        
    
    const middleList = parseInt(sortList.length / 2);

    function isEven(number) {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let median;

    if (isEven(sortList.length)) {
        const element1 = sortList[middleList - 1];
        const element2 = sortList[middleList];

        const average = calArithmeticAverage([
            element1,
            element2
        ]
        );
        return average;
        
    } else {
        median = sortList[middleList];
        return median;
    }
}
/* console.log(calArithmeticMedian([
    40000000,
    500,
    100,
    200
    ])); */