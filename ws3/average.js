/* const list1 = [
    100,
    200,
    300,
    500,
]; */



function calArithmeticAverage(list) {
    /* let sumList = 0;
    
    for (let i = 0; i < list.length; i++) {
        sumList = sumList + list[i];
    } */

    // To iterate with the list you can use a FOR, but also a method called REDUCE
    
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    )

    const averageList = sumList / list.length;
    return averageList;
}


console.log([
    calArithmeticAverage([1,14,151,1000000])
]);