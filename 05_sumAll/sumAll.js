const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        const highNum = Math.max(num1, num2);
    let finalNum = 0
    for (i = 0; i <= highNum; i++) {
        finalNum += i;
    }
    return finalNum
    } else {
        return 'ERROR';
    }
};
// Do not edit below this line
module.exports = sumAll;
