// verilmis array-in icinde en uzun olan stringi tapmaq
// ['yusif', 'koroglu', camil', 'qacaq nebi', 'superman']

const arr = ['yusif', 'koroglu', 'camil', 'qacaq nebi', 'superman'];
let max = arr[0].length;
let long;
for(let i = 0; i<arr.length; i++){
    if(arr[i].length > max){
        max = arr[i].length;
        long = arr[i];
    }
}

console.log(long);