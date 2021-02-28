// Size bir eded verilir o ededin reqemleri cemini tapan proqram yazin
//     Example: 2343 => 2+3+4+3=12

let num = 235;
let remainder;
let s = 0;  

while(num > 0){
    remainder = num%10;
    s+=remainder;
    num = Math.floor(num/10);
}
console.log(s);