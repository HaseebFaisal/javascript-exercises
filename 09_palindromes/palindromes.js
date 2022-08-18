const palindromes = function (string) {
    reverseString = string.split("").reverse();
    if (reverseString === string) {
        return true;
    } else return false;
    
};

// Do not edit below this line
module.exports = palindromes;
