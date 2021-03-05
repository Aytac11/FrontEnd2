const find = (num1) =>{
    let c;
    let s="";
    if(num1 <2){
        return num1;
    }

    else{
        return find(num1-1) + find(num1-2);
    }
}

console.log(find(10));



// let num1 = 0;
// let num2 = 1;
// let c;
// let s = "";

// for(let i=0; i < 10; i++){
//     c = num1 + num2;
//     num1 = num2;
//     num2 = c;
//     s += num1 + " ";
// }

// console.log("0",s);
