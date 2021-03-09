let arr = [1, 1, 2, 3, 2, 2, 2, 8, 8, 1, 9];
// let c = 0;
// for(let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[i] === arr[j] && arr[i] === arr[i+1]){
//             c++;
//         }
//     }
// }

// console.log(c);

let t;
let s = "";
for(let i=0; i<arr.length-1; i++){
    if(arr[1] == arr[i+1]){
        t++;
    }
}

console.log(t);