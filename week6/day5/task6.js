// Size soz verilir ve o sozde kicik herfleri boyuk herfe boyuk herfleri ise kicik 
//     herfe cevirmek teleb olunur

const sen = " Hello World";
let s = "";

for(let i=0; i<sen.length; i++){
    if(sen[i] === sen[i].toLowerCase()){
        s += sen[i].toUpperCase();
    }
    else{
        s += sen[i].toLowerCase();
    }
}

console.log(s);