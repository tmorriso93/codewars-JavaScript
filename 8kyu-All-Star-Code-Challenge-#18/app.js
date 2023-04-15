// Create a function that accepts a string and a single character, and returns an integer of the count of 
// occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

function strCount(str, letter){  
    //code here
    let result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter) {
            result++
        }
    }
    return result
  }

  console.log(strCount("hello world", "l"))
  //we get 3 because there is 3 letter l's in the string


  //Shorter way
  const strCount2 = (str, letter) => 
    str.split(letter).length -1

    console.log(strCount2("hello world", "o"));