//Reqemlerden ibaret verilmis array-in ilk ve son reqemlerinin yerini deyismek
//meselen: [1, 2, 3, 4, 9] => [9, 2, 3, 4, 1]

const arr = [1, 2, 3, 4, 9];
const first = arr[0];
const last = arr[arr.length-1];
// let new_arr = arr.splice(0,1,last);
// let new_arr2 = arr.splice(arr[arr.length-2],1,first);

first=last;
last=first;

console.log(arr);
