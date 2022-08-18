const fibonacci = function(fibNo) {
    if (fibNo < 0) {
        return 'OOPS';
    }
    if (typeof fibNo === 'string') {

        let fibonacci = parseInt(fibNo, 10);

    }
    let arr = [0,1];
    for (let i = 0; i < fibNo; i++){
        let newNum = arr[i] + arr[i+1];

        arr.push(newNum);
    }
        return arr[arr.length-2];
};

// Do not edit below this line
module.exports = fibonacci;
