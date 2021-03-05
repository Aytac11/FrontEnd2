//shift

const shiftMy = (arr) =>{
    let s = [];

    for (let i = 1; i < arr.length; i++) {
        s += arr[i] +",";
    }
    let l =[];
    for (let j = 0; j < s.length-1; j++) {
        l += s[j];
    }
    arr.length = 0;
    let j=0;
    while(j<l.length){
        arr+=l[j];
        j++;
    }
    return arr;
}
console.log(shiftMy(["Banana", "Orange", "Apple", "Mango"]));