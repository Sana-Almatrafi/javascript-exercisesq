const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1)
        || !Number.isInteger(num2)
        || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let resultSum = 0;
    let big = num2;
    let small = num1;
    if (num1 > num2) {
        big = num1;
        small = num2;
    }
    for (let i = small; i <= big; i++) {
        resultSum +=  i;
    }
    return resultSum;
};

// Do not edit below this line
module.exports = sumAll;
