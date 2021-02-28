//Elə proqram yazın ki, verilmiş cümlənin əvvəlinə verilmiş simvolları əlavə etsin. Əgər həmin
// simvollar verilmiş cümlənin əvvəlində varsa, verilmiş cümlənin özünü göstərsin.
// Məsələn: proqramlasdirma, proq => proqramlasdirma
// proqramlasdirma, veb => vebproqramlasdirma

const sen = "proqramlasdirma";
const word = "veb";


//------------method1-----------//
const new_word = sen.slice(0,word.length);

if(word == new_word){
    console.log(sen)
}
else{
    let new_sen = word + sen;
    console.log(new_sen)
}

//-----------method2------------//
if(sentence.indexOf(find) === 0) {
	console.log(sentence);
} else {
	console.log(find + sentence);
}
