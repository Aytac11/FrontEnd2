// unshift

const unshiftMy=(arr, value)=>{
    // return value + "," + arr;
    s = value + "," + arr;
    arr.length = 0;
    let j=0;
    while(j<s.length){
        arr+=s[j];
        j++;
    }
    return arr;
}

console.log(unshiftMy(["Banana", "Orange", "Apple", "Mango"],"Lemon"));
