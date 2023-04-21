const likes = (names, length = names.length) => 
    length < 1 ? 'no one likes this' : 
    length < 2 ? `${names[0]} likes this` :
    length < 3 ? `${names[0]} and ${names[1]} like this` :
    length < 4 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
                 `${names[0]}, ${names[1]} and ${length - 2} others like this`


                 console.log(likes(["tim",'jimbo', 'chopper', 'robyn', 'cali']))