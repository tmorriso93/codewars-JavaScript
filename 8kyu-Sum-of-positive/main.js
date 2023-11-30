function positiveSum(arr) {
    return arr.filter(number => number > 0).reduce((total, currentValue) => {
    return total + currentValue;
   }, 0)
    }