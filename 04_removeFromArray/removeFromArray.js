const removeFromArray = function(array, numberToRemove) {
    let index = array.indexOf(numberToRemove);
    array.splice(index, 1);

    return array;
};

console.log(removeFromArray([1, 2, 3 ], 1));

// Do not edit below this line
module.exports = removeFromArray;
