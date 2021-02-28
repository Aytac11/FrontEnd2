// Verilmiş array-ın verilmiş index-dəki dəyəri, verilmiş index-ə sürüşdürmək

// Məsələn: [10,20,30,40,50,60,70], 0, 2 => [20,30,10,40,50,60,70]

// ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"], 2, 5 => ["BMW", "Fiat", "Audi", "Opel", "Bentley", "Mercedez"] 

const arr =  [10,20,30,40,50,60,70];
const i = 0;
const j = 2;

let elem = arr[i];
arr.splice(i,1)

arr.splice(j,0,elem);

console.log(arr)