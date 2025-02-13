const removeFromArray = function(arr, ...num) {

    return arr.filter(el => !num.includes(el));
    
};


removeFromArray([1,2,3,4], 3);
// Do not edit below this line
module.exports = removeFromArray;
