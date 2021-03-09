//push 

// const myPush = (arr,value) => {
//     // return arr + "," + value;
//     let s = arr + "," + value;

//     arr.length = 0;
//     let j=0;
//     while(j<s.length){
//         arr+=s[j];
//         j++;
//     }
//     return arr;
// }

const myPush = (arr,value) => {
    arr[arr.length]=value;
    return arr;
}


// const myPush = (arr, value) =>{
//     let lastElem = arr[arr.length - 1];
//     arr[++lastElem] = value;
//     return arr;
// }

console.log(myPush(["Banana", "Orange", "Apple", "Mango"],"Kiwi"))

// if(delCount > (arrLen - start)) {
//     delCount = arrLen - start;
//   }