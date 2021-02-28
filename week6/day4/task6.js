// Verilmiş array-ın verilmiş rəqəminin hansı index-lər aralığında yerləşməsini tapmaq. Dövr ilə
// Məsələn: [10,20,30,40,50,60,70], 50 => 3 və 5

const arr = [10,20,30,40,50,60,70];
const elem = 10;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === elem){
        if(arr[i] === arr[arr.length-1]){
            console.log(`${i-1} ve yoxdur`)
        }
        else if(arr[i] === arr[0]){
            console.log(`yoxdur ve ${i+1}`);
        }
        else{
            console.log(`${i-1} ve ${i+1}`);
        }
    }
    
}

