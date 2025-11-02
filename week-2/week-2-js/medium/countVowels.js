/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let array = str.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let condition =
      array[i] == "a" ||
      array[i] == "e" ||
      array[i] == "i" ||
      array[i] == "o" ||
      array[i] == "u";
    if (condition) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = countVowels;