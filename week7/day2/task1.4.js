// Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olMAMAsini yoxlamaq. true ve ya false qaytarmaq
// meselen: [7, 8] => true
//     [9, 3, 7, 8] => false

const arr = [7, 8,1];

let isTrue = true;

for(let i=0; i<arr.length; i++){
    if(arr[i] == 1 || arr[i] == 3){
        isTrue = false;
    }
}

if(isTrue){
    console.log("true");
}
else{
    console.log("false");
}