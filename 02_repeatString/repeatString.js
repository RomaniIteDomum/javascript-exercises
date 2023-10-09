const repeatString = function (string, number) {
  let word = string;
  if (number < 0) {
    return `ERROR`;
  } else if (number === 0) {
    return ``;
  } else {
    for (let i = 0; i < number - 1; i++) {
      word += string;
    }

    return word;
  }
};

console.log(repeatString(`hey`, 3));

// Do not edit below this line
module.exports = repeatString;
