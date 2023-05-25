// We're using regex to search a string and replace "T" with "U"
//the lower case g means to search global search flag so we can
// search more then one time for each char

function DNAtoRNA(dna) {
 return dna.replace(/T/g, "U")
}