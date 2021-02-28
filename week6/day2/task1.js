//Verilmiş 2 rəqəmin birinin mənfi müsbət olacağı təqdirdə true, əks halda false qaytarsın.
// Məsələn: 5, 5 => false ||| 5, -5 => true ||| -5, 5 => true ||| -5, -5 => true

const a=-3;
const b=-3;

// if((a === Math.abs(a) || b === Math.abs(b)) || (a<0 && b<0)){
    if(a<0 || b<0){
    console.log("true");
}
else{
    console.log("false");
}