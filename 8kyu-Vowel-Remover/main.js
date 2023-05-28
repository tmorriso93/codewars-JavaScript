//Create function that will remove vowels from string

// use Regex to solve this problem
function shortcut (string) {
    //g means replace all, without the g it stops after the 1st vowel
    //i means case insensative (accepts upper and lower case)
    //keep all vowels inside brackets
    return string.replace(/[aeiou]/gi, '')
  
}

console.log(shortcut("hello"));
//return hll





//another way to remove Vowels from a string
function shortcut2(string) {
    let vowels = 'aeiou';

    let result = []

    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            result.push(string[i])
        }
    }
    return result.join('');
}

console.log(shortcut2("hello2"))