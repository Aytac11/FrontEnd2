// Verilmiş rəqəmin ədədlərini tək-tək toplamaq(сложить).
// Məsələn: 555 => 15, 51 => 6, 1234 => 10

let num = 551;
let remainder;
let s = 0;


while (num > 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    s += remainder;
}

console.log(s);