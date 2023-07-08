function check(a, x) {
  return a.indexOf(x) > -1;
}

//look at 'a' and check if the 'x' value is inside a.
//-1 means false and positive 1 means true
//we tell the function to return true if 1 and false if -1

console.log(check(['green', 'blue', 'red'], 'blue'));
console.log(check(['green', 'blue', 'red'], 'purple'));
