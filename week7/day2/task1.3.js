// Reqemlerden ibaret verilmis array-in en boyuk reqemini tapib, diger butun reqemleri onunla evezlemek
// meselen: [12, 10, 3] => [12, 12, 12]
//     [10, 3, 29, 15] => [29, 29, 29, 29]

const arr = [12, 10, 3];
max=arr[0];
let s= [];
for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max=arr[i];
    }
    s+=max+" ";
}
console.log(s);