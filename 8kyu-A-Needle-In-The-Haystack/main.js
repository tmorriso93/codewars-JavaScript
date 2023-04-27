

function findNeedle(haystack) {
   
    return `found the needle at position  ${haystack.indexOf('needle')}`
   
  }

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))


// To solve this problem we'll use
// indexOf()
// this method returns the first index at which a given element can be found
// in an array, or -1 if it's not present