function fakeBin(x){
   return x.split('').map(y => y < 5 ? 0 : 1).join('')
  }

 
console.log(fakeBin('4206'))
console.log(fakeBin('824'))
console.log(fakeBin('3'))
console.log(fakeBin('8'))