//Verilmiş array-dan random sayda elementi random çıxan index-dən kəsib, arrayın sonuna birləşdirmək

//Məsələn: [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ], rand 3 çıxdısa => [ 3, 8, 7,  3, 2, 1, 6, 5, -4 ]

const arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
console.log(arr)
const rand = getRndInteger(0,arr.length);
console.log(rand)
let removed = arr.splice(rand,rand);
console.log(removed)


console.log(arr.concat(removed));