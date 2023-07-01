// return the lowest and highest number

// const highAndLow = (numbers, split = numbers.split(' ')) =>
//      Math.max(...split) + ' ' + Math.min(...split)


     function highAndLow(numbers){
        numbers = numbers.split(' ');
        return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
      }

    