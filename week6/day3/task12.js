// Verilmiş array-ın verilmiş elementini array-dən çıxarmaq

// Məsələn: [10,20,30,40,50,60,70], 50 => [10,20,30,40,60,70]

const arr = [10,20,30,40,50,60,70];
const elem = 50;

const index = arr.indexOf(50);

arr.splice(index,1);

console.log(arr);