//code a function that returns a string in which the firstname is swapped with the last name

function nameShuffler(str) {
    return str.split(" ")[1] + " " + str.split(" ")[0];
}

console.log(nameShuffler("drew berry"))

// OR

function nameShuffler2(str) {
    let [first, last] = str.split(" ")
    return last + " " + first;
}

console.log(nameShuffler2("kobe bryant"))