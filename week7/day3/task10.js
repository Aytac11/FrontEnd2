//push 

const pushMy = (arr,value) => {
    // return arr + "," + value;
    let s = arr + "," + value;

    arr.length = 0;
    let j=0;
    while(j<s.length){
        arr+=s[j];
        j++;
    }
    return arr;
}

console.log(pushMy(["Banana", "Orange", "Apple", "Mango"],"Kiwi"))
