// Verilmiş array-in verilmiş rəqəmini verilmiş rəqəmlə dəyişdirmək.
// Məsələn: [3,10,2,51,4, 643, 4, 11], 4, 222 => [3,10,2,51,222, 643, 222, 11]

const Change = (arr, num1, num2) =>{
    for(let  i = 0; i < arr.length; i++){
        if(arr[i] === num1){
            arr[i] = num2;
        }
    }
    return arr;
}

console.log(Change( [3,10,2,51,4, 643, 4, 11], 4, 222));