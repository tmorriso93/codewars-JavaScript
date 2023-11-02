var uniqueInOrder = iterable => 
    [...iterable].filter((element,index) => element != iterable[index + 1])

console.log(uniqueInOrder("ABBCcAD"))
console.log(uniqueInOrder([1,2,2,3,3]))