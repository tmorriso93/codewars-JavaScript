function greet(name, owner) {
    const person = name === owner ? 'boss' : 'guest';
    return `Hello ${person}`
}

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))