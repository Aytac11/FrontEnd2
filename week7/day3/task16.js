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