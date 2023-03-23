//use Replace All
// function correct(string){
//     return string 
//         .replaceAll('0', 'o')
//         .replaceAll('5', 's')
//         .replaceAll('1', 'i')
// }

// console.log(correct("n0t1ce5"));


//use A Loop
function correct1(string){
    let newString = '';
    for (const char of string) {
        if (char === '5') {
            newString += 'S'
        } else if (char === '0') {
            newString += 'O'
        } else if (char === '1') {
            newString += 'I'
        } else {
            newString += char;
        }
    }
    return newString
}

console.log(correct1("N0T1CE5"));