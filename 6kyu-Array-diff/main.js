//return elements in a but if any elements in b are in a dont return them
function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element));
}

console.log(arrayDiff([1,2,3,4,5],[1,2]));