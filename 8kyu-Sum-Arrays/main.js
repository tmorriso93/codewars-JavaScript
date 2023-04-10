function sum(numbers) {
    if(numbers.length === 0) return 0;
    return numbers.reduce((total, currentValue) => total + currentValue);
}

console.log(sum([1, 5.2, 4, 0, -1]))