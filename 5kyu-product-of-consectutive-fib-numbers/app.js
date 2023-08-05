function productFib(prod){
    let arr = [0, 1, 1];
    while(true) {
        let last = arr[arr.length - 1];
        let secondToLast = arr[arr.length - 2];
        if(last * secondToLast === prod) {
            return [secondToLast, last, true];
        } else if (last * secondToLast > prod) {
            return [secondToLast, last, false]
        }
        arr.push(last + secondToLast);
    }
}

console.log(productFib(714))
console.log(productFib(800))