// pop

const popMy = (arr) =>{
    let s = arr[0];

    for (let i = 1; i < arr.length-1; i++) {
        s += "," + arr[i];
    }

    arr.length = 0;
    
    for(let j=0; j<arr.length; j++){
        arr+=s[j];
    }
    return arr;
}

console.log(popMy(["abc","xcv","qwe"]));