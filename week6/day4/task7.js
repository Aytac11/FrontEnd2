// Verilmiş array-ın verilmiş rəqəmindən sonra neçə elmentin olmasını yoxlamaq və onları console-da göstərmək. Dövr ilə

// Məsələn: [10,20,30,40,50,60,70], 50 => 2 element, 60, 70

const arr = [10,20,30,40,50,60,70];
const elem = 10;
let n;
let s = "";
    count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elem){
            n=i;
            for(let j=n+1; j<arr.length; j++){
                s+=", "+arr[j];
                count++;
            }
        }
    }
    

console.log(`${count} element ${s}`)