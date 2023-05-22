function countSmileys(arr) {
  const validSmileys = {
        ":)": true,
        ";)": true,
        ":D": true,
        ";D": true,
        ":-D": true,
        ":~D": true,
        ":-)": true,
        ":~)": true,
        ";~D": true,
        ";~)": true,
        ";-D": true,
        ";-)": true
    };
return arr.filter(chars => validSmileys[chars]).length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D'])); 
//returns 2 