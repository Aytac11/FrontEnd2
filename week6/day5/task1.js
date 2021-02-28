// Verilmiş ədədin faktorialını hesablayan proqram yazın:
//     Example: Size verilir 6 => Cavab: 720

const num = 6;
let f = 1;

for(let i=1; i<=num; i++){
    f *= i;
}

console.log(f);