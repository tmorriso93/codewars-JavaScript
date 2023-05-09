function tribonacci(result ,length){
  if(length === 0) {
    return []
  } else {
  if(length === 1) {
    return [1]
  } else { 
  if(result.length >= length){
    return result
  }
  result.push(result[result.length - 3] +
                 result[result.length - 2] +
                 result[result.length - 1]);
  return tribonacci(result, length)
}}} 

console.log(tribonacci([1,1,1], 10));