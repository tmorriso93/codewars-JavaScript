// Look at a string and return the index of every Capital letter.
// in the function I use a few methods to solve this problem
// split('') : split the word and return a string of each letter in the word 
// Regex: /[A-Z]/: look for characters A-Z
// test(): after you look for characters A-Z  test() will test for a match in a string
// and return true or false. 
// push() at the end push the index (number) into our empty array

function capitals (word) {
    const result = [];
    word.split('').forEach((letter, index) => /[A-Z]/.test(letter) && result.push(index))
    return result
} 

console.log(capitals("CodEWaRs"));


// Another Way to solve it

var capitals2 = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

  console.log(capitals2("CodEWaRs"));