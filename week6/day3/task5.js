// Verilmiş rəqəmin tam(целая) və kəsr(дробь) hissəsinə(часть) ayırıb, toplamaq(сложить).

// Məsələn: 1.7 => 8, 5.18 => 14, 10.5=> 15

const num = 5.18;
let s=0;
const n = (num.toString()).split('.');

s = Number(n[0]) + Number(n[1]);

// for(let i=0; i<n.length; i++){
//     s+=Number(n[i]);
// }

console.log(s)
