const reverseString = function (string) {
  const stringLength = string.length;
  let word = ``;
  for (let i = stringLength - 1; i >= 0; i--) {
    word += string.charAt(i);
  }
  return word;
};

console.log(reverseString("Dad bod"));

// Do not edit below this line
module.exports = reverseString;
