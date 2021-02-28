//Verilmiş sözün, verilmiş hərfindən əvvəlki hərfini tapıb, Azərbaycan əlifbasında ondan sonra gələn hərfi göstərmək. Əgər əlifbada sonuncu hərfdirsə, elə özünü göstərmək
//Məsələn: salam, l => b ,  nizam, a => z ,  elman, a => n
 
const alph = "abcçdeəfgğhxıijkqlmnoöprsştuüvyz";
const sen = "salzm";
const letter = "m";

let index = sen.indexOf(letter)-1;

if(sen[index]=="z"){
    console.log("z");
}
else{
    for(let i=0; i<alph.length; i++){
        if(alph[i]==sen[index]){
            console.log(alph[i+1]);
        }
       
    }
}
