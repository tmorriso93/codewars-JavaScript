function plural(n) {
    //if value is above 1 it is a plural, return true
    if (n !== 1) {
        return true
      } else {
        return false
      }
}

//if n is not 1 return true or else return false

//OR

function plural2(n) {
      return n !== 1;
}

//OR

function plural3(n) {
    return n === 1 ? false : true;
  }