// verilmis array-in icinde tek ve cut reqemleri ayriliqda taplayib, birlesdirmek
// [1,2,3,4,5] => tek(1+3+5) + cut(2+4) = 96

const arr = [1,2,3,4,5];
let s = 0;
let j = 0; 

// const findOven = ()

for(let i=0; i< arr.length; i++){
    if(arr[i]%2 == 0){
        s +=arr[i];
    }
    else{
        j += arr[i];
    }
}

console.log(j.toString()+s.toString());