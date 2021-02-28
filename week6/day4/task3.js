// Reqemlerden ibaret verilmis array-in icinde 1 ve ya 3 reqeminin olmasini dövr ilə yoxlamaq. true ve ya false qaytarmaq
// meselen: [7, 8] => false
//     [9, 3, 7, 8] => true

function check(arr){
    for(let x of arr){
        if(x === 1 || x == 3){
            return "true";
        }
    }
    return "false";
}

console.log(check( [7, 5,9]));