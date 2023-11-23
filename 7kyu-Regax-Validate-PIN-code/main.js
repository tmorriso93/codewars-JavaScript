// Option 1 using regualar JavaScript
// function validatePIN (pin) {
//     //return true or false
//     if(pin.length != 4 && pin.length != 6) {
//         return false
//     }
//     for (let i = 0; i < pin.length; i++) {
//         if (pin[i] > '9' || pin[i] < '0') {
//             return false
//         }
//     }
//     return true
//   }

//   console.log(validatePIN('12348'))

// Option 2 using Regex
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)

console.log(validatePIN('123a'))