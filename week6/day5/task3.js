// Fibonaççi sırasının neçə hədli olması üçün say daxil edin və bunun nəticəsində
//     o qədər sayda fibonaççi sırası çıxsın
//     Example: Heddin sayı: 5 , Cavab kimi çıxmalıdır: 0 1 1 2 3

const elem = 5;
let s;
let num1=0;
let num2=1;
let c = "";
for(let i=1; i<elem; i++){
    s= num1 + num2;
    num1=num2;
    num2=s;
    c+=num1+" ";
}
console.log("0",c)