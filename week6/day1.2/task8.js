//"azerbaycan" sözündə random sırada çıxmış bir hərfi böyük hərflə əvəzləmək. <br>
// Məsələn: random çıxan rəqəm 4 oldu, onda belə olur "azeRbaycan" <br>
// random çıxan rəqəm 7 olsa, onda belə olur "azerbaYcan"

const word = "azerbaijan";
// const r = Math.floor(Math.random() * (word.length - 0) ) + 0;
// let j = "";

// method 1

for (let index = 0; index < word.length; index++) {
    let s = word[index];
    if( word[index] == word[r]){
         s = word[index].toUpperCase();   
    }
    j += s;
} 

// console.log(j)

// method 2

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

// const randToUpper = (word) => {
// 	const rand = random(1, word.length);

// 	const upper = word[rand - 1].toUpperCase();
// 	const part1 = word.slice(0, rand - 1);
// 	const part2 = word.slice(rand);

// 	return part1 + upper + part2;
// }

// console.log(randToUpper('yusif'));