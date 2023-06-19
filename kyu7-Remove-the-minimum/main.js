function removeSmallestNum(numbers) {
    //find the smallest number
    let smallestNum = Math.min.apply(Math, numbers);
    //find the smallest numbers index
    let indexOfSmallestNum = numbers.indexOf(smallestNum);
    //remove smallest number from the array
    numbers.splice(indexOfSmallestNum, 1);
    return numbers;
}

console.log(removeSmallestNum([1,2,3,4,5]))