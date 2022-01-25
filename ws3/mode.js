const list1 = [
    1,
    1,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    2
];

const countList1 = {};

list1.map(

    function (element) {

        if (countList1[element]) {
            countList1[element] += 1;
        } else {
            countList1[element] = 1;
        }
    }
    );
    console.log(countList1);