// Ilk 10 ededin Fibonaççi sırasını düzəldən proqram yazın:
//     Example: 0 1 1 2 3 5 8 13 21 34 
let s;
let num1=0;
let num2=1;
let c = "";
for(let i=1; i<10; i++){
    s= num1 + num2;
    num1=num2;
    num2=s;
    c+=num1+" ";
}
console.log("0",c)

