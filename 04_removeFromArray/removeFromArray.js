// const removeFromArray = function(array, numberToRemove) {
//     let index = array.indexOf(numberToRemove);
//     array.splice(index, 1);

//     return array;
// };

// console.log(removeFromArray([1, 2, 3 ], 3));

const removeFromArray = function (originalArray, ...numbers) {
    return originalArray.filter((element) => !numbers.includes(element));

} 

console.log(removeFromArray([1, 2, 3 ], 3));

// Do not edit below this line
module.exports = removeFromArray;
