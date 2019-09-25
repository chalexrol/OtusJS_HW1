
function sum(number) {

    let currentSum = number;

    function add(nextNum) {

        if (nextNum==null) {

          return currentSum;
        }

        currentSum += nextNum;
        return add;
    };

    return add;

};



console.log(sum(1)(2)(3)());

console.log(sum(5)(6)(7)());

console.log(sum(1)(3)());
