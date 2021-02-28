// Verilmiş sözün, verilmiş hərfinin index-ləri cəminin 5-dən böyük olmasını yoxlamaq və cəminin neçə olmasını göstərmək. Əgər cəm 5-dən böyükdürsə "böyükdür", əks halda "kiçikdir" yazın.
// Məsələn: salam, a  =>  cəm: 1+3, kiçikdir.  teyyare, e => cəm: 1+6, böyükdür

//------------method1----------//

const word = "salam";
const letter = "a";
let c = 0;
for(let i=0; i<word.length; i++){
    if(word[i] == letter){
        c += word.indexOf(word[i]);
        
    }
    
}

console.log(c)

//-----------------method2------------//
const word2 = 'teyyare';
const find2 = 'e';

const foundIndex1 = word2.indexOf(find2);
const foundIndex2 = word2.indexOf(find2, foundIndex1 + 1);

let lessOrMore = 'kiçikdir';
if(foundIndex1 + foundIndex2 > 5) {
	lessOrMore = 'böyükdür';
}

console.log('cəm: '+ foundIndex1 +' + '+ foundIndex2 +' = '+ (foundIndex1 + foundIndex2) +'. '+ lessOrMore); // ES5
console.log(`cəm: ${foundIndex1} + ${foundIndex2} = ${foundIndex1 + foundIndex2}. ${lessOrMore}`); // ES6
