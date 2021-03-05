// (Loop) Verilmiş sözün hərflərini Azərbaycan əlifbasında ondan sonra gələn hərflə əvəzləmək.
// Məsələn: ace => bçə

const alph = "abcçdeəfgğhxıijkqlmnoöprsştuüvyz";
const sen = "ace";
let s ="";

    for(let i=0; i<alph.length; i++){
        for(let j = 0; j<sen.length; j++){
           if(alph[i] == sen[j]){
               s += alph[i+1];
           }
        }
       
    }

    console.log(s);