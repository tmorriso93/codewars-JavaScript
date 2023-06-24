// Write a function that given a floor in the american system returns the
//  floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th 
// floor being removed, the numbers move down to take their place. 
// In case of above 13, they move down by two because there are two 
// omitted numbers below them.

function getRealFloor(n) {
    if (n <= 0) return n;
    if (n < 13) return n - 1;
    return n - 2
}

console.log(getRealFloor(-4));
console.log(getRealFloor(0));
console.log(getRealFloor(10));
console.log(getRealFloor(15));

//-4, 0, 9, 13