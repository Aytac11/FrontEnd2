//Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olmasini yoxlamaq. true ve ya false qaytarmaq
// meselen: [7, 8] => false
// [9, 3, 7, 8] => true

const arr = [9, 3, 7, 8];

const a = arr.indexOf(1);
const b = arr.indexOf(3);

if(a>0 || b>0){
    console.log("true");
}
else{
    console.log("false")
}

