// A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters
// A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.


function isPangram(string){
    //1. Convert strung to lower case and split to ''
    const splStr = string.toLowerCase().split('')

    //2. Split 'abcdefghijklmnopqrstuvwxyz' that will create array of each letter
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    //4. Loop over each letter in 'string' (splitted)
    for (const letter of splStr)
    
    //4. Loop over each letter in 'alphabet' (splitted)
    for (let i = 0; i < alphabet.length; i++)

    //5. If 'letter' is 'alphabet' at position 'i', setting alphabet at 'i' to Empty String
    if (letter === alphabet[i]) alphabet[i] = '';

    //6. Filtering alphabet with the values that aren't equal to ''
    alphabet = alphabet.filter(value => value !== '')

    //7. Return true if alphabet. length is 0. false otherwise
    return !alphabet.length ? true : false;

  }

  //a faster way
  function isPangram2(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog"))
  //returns true because every letter of the alphabet is in the string
  //if not all letters of the alphabet are in the string it returns false