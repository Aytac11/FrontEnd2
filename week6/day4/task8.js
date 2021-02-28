// Verilmiş array-ın verilmiş index-dəki elementini console-da göstərmək. Dövr ilə

// Məsələn: [10,20,30,40,50,60,70], 4 => 50

// const arr = [10,20,30,40,50,60,70];
// const index = 4;
// let n;
// for(let i=0; i<arr.length; i++){
//     if(i === index){
//         console.log(arr[i])
//     }
// }


function findElement(index,arr){
    for(let i=0; i<arr.length; i++){
        if(i === index){
            return arr[i];
        }
    }
}

console.log(findElement(3,[10,20,30,40,50,60,70]))
