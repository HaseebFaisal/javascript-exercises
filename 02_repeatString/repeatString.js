const repeatString = function(word, reps) {
    if (reps < 0) return 'ERROR';
    let string = '';
    for (i = 0; i < reps; i++) {
        string += word;
    }
    return string;
};
     
console.log(repeatString('test', 3));
// Do not edit below this line
module.exports = repeatString;
