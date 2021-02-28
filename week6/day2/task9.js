//Verilmiş 2 rəqəmin biri 5 və ya bu iki rəqəmin fərqi 5-dirsə true, əks halda false qaytarsın
//Məsələn: 33, 5 => true,  21,16 => true,  33, 16 => false

const a = 11;
const b = 6;

if(a === 5 || b === 5 || a - b === 5 || b - a === 5){
    console.log("true");
}

else{
    console.log("false");
}