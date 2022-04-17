/*const removeFromArray = function(array, ...toRemove) {
    let finalArray = []
    for (let i = 0; i < array.length; i++) {
        if(toRemove.indexOf(array[i]) === -1){
            finalArray.push(array[i]);
        }
    }
    return finalArray;
};
*/
const removefromArray = function(...args) {
    array = args[0];
    finalArray = [];
    array.foreach(item) {
        if (!args.includes(item)) {
            finalArray.push(item);
        }
    }
    return finalArray;
}

console.log(removeFromArray ([1, 2, 3, 4], 2));

//
module.exports = removeFromArray;
