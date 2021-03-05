// Reqemlerden ibaret verilmis array-in icinde axtarilan reqemin 2 defe olmasini yoxlamaq. true ve ya false qaytarmaq
// meselen: [53, 90, 30, 21, 30] axtar 30 => true
//     [53, 90, 21, 30] axtar 30 => false

const isTwice = (arr, num) => {
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(num == arr[i]){
            count++;
        }
        
    }

    if(count > 2){
        return "There is more than 2 num";
    }

    else if(count == 2){
        return true;
    }
    
    return false;
}

console.log(isTwice([53, 90, 30,30,30, 21],30));
console.log(isTwice( [53, 90, 30, 21, 30],30));