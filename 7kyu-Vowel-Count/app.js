// create a function that counts  the lowercase vowels in a string

function getCount(str) {
    let vowelsCount = 0;
    
    for(let i = 0; i < str.length; i++){
        switch (str[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
                vowelsCount++
            break;
      default:
            break;
    }
}
  return vowelsCount;
}



console.log(getCount("abahaaaakqeeliqilisusuxoo"));
//15 