//list smallest and highest numbers in an array

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

  console.log(minMax([1,2,3,4,5]))