// Verilmiş rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить). Yalnız dövr, if/else-dən istifadə edərək yazmaq lazımdır, hazır method-lar OLMAZ

// Məsələn: 1.7 => 8, 5.18 => 14, 10.5=> 15

const num = 15.18;
let s='';

const str = num.toString();
//  for(let x of str){
//      if(x!="."){
//          s+=Number(x);
//      }
//  }

for(let i=0; i< str.length; i++){
    if(str[i]==="."){
        for(let j=i+1; j<str.length; j++){
            s+=str[j]
        }
    }
    else{
        s+=str[i]
    }
    
}

 console.log(s)