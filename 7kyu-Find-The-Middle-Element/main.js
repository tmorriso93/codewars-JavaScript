// function gimme (triplet) {
//     if (triplet[0] > triplet[1] && triplet[0] < triplet[2] ||
//           triplet[0] > triplet[2] && triplet[0] < triplet[1]) {
//             return 0
//     } 
//     if (triplet[1] > triplet[0] && triplet[1] < triplet[2] ||
//           triplet[1] > triplet[2] && triplet[1] < triplet[0]) {
//             return 1
//     } 
//             return 2
//     } 

// shorter way

const gimme = triplet => 
    triplet.indexOf([...triplet].sort((a,b) => a - b)[1])

    console.log(gimme([2,3,1])); // 0
    console.log(gimme([5,10,15])) // 1