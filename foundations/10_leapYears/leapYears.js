const leapYears = function (year) {

    let divisibleByFour = (year % 4 === 0);
    let divisibleBy100 = (year % 400 === 0);
    if (year % 10 === 0) {
        return (divisibleByFour && divisibleBy100);
    }
    return divisibleByFour;
};

// Do not edit below this line
module.exports = leapYears;
