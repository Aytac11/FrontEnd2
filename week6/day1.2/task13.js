//>Sözün hərflərini Azərbaycan əlifbasında ondan sonra gələn hərflə əvəzləmək. <br>
// Məsələn: ace => bçə

// const l = "bace";
// let s="";
// const arr = ["ə","Ə","ğ","Ğ","ş","Ş","ç","Ç","ö","Ö","ü","Ü","ı","I"];



// console.log(r);

const l = "bace";
const alphabet = "abcçdeəfgğ"
let s;
let str = "";
let a;

//------------method1---------//
// for( let i=0; i<l.length; i++){
//     // s = String.fromCharCode(l.charCodeAt(i) + 1);
//     // str += s; 
//     s = l[i];
//     for(let j = 0; j<alphabet.length; j++){

//         if(s==alphabet[j]){
//             a=alphabet[j+1];
//             str+=a;
//         }
//     }
// }

//-------------method2-------------//
const alphabet = 'abcçdeəfgğhxıijkqlmnoöprsştuüvyz';
const word = 'aco';

const indexLetter1 = alphabet.indexOf(word[0]) + 1;
const indexLetter2 = alphabet.indexOf(word[1]) + 1;
let indexLetter3 = alphabet.indexOf(word[2]) + 1;

if(indexLetter3 === alphabet.length) {
	indexLetter3--;
}

console.log(str);