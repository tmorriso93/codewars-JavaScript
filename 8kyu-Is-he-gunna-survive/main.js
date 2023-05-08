//a hero need 2 bullets to kill 1 dragon
//Assuming he's gonna grab a specific given number of bullets and move forward to fight
// another specific given number of dragons, will he survive?
//Return true if yes, false otherwise

function hero(bullets, dragons){
	return bullets / 2 >= dragons
}

console.log(hero(1, 3)); //1 bullet 3 dragaons = false
console.log(hero(4, 2)); //4 bullets 2 dragons = true