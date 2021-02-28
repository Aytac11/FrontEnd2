//Verilmiş array-in verilmiş rəqəmini verilmiş rəqəmlə dəyişdirmək.
//Məsələn: [3,10,2,51,4, 643, 4, 11], 4, 222 => [3,10,2,51,222, 643, 222, 11]

const arr = [3,10,2,51,4, 643, 4, 11];
const num = 4;
const chg = 222;

arr[num] = chg;

console.log(arr);