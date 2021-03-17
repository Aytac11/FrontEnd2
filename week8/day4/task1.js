const push = (arr, value) => {
    arr[arr.length] = value;
    return arr;
}


let num = 9582;
let str = num.toString();
let s = '';

for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
        if (str[i] !== str[j]) {
            push(s, str[j]);
        }

    }


    console.log(s);
}