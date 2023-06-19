function removeSmallestNum(numbers) {
    //find the smallest number
    let smallestNum = Math.min.apply(Math, numbers);
    //find the smallest numbers index
    let indexOfSmallestNum = numbers.indexOf(smallestNum);
    //remove smallest number from the array
    numbers.splice(indexOfSmallestNum, 1);
    return numbers;
}

// or you can do it this way to not
//modify the original array

function removeSmallest(numbers) {
    //if no array numbers then return an empty array
    if(!numbers) return [];
    //find smallest number
    let min = Math.min.apply(null, numbers);
    //create new array and use slice to select numbers 
    let newArr = numbers.slice(0);
    //use splice to add/insert small number and 
    //remove 1 item from array
    newArr.splice(newArr.indexOf(min), 1);
    //return newArr
    return newArr
}

console.log(removeSmallest([1,2,3,4,5]))