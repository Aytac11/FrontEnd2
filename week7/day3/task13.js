//splice

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
let s = "";

// function spliceMy(arr,index,len){
//     let s ="";
//     if (arguments.length == 3) {
//             if(index >0){
//                 for (let i = index; i < arr.length; i++) {
//                     s += arr[i+len] + " ";
//                 }

//             }
//             // if(index<0){
//             //     index2 = str.length + start;
//             //     for (let i = start2; i < str.length; i++) {
//             //         s += str[i];
//             //     }
//             // }
//     }
//     // if(arguments.length > 3){
//     //     let end;
//     //     end = index +len;
//     //     for (let i = start; i < end; i++) {
//     //         s += str[i];
//     //     }
//     // }
//     return s;
// } 

// function arraySplice(array, start, deleteCount) {
//     var result = [];
//     var removed = [];
//     var argsLen = arguments.length;
//     var arrLen = array.length;
//     var i, k;
  
//     // Deal with negative start per spec
//     // Don't assume support for Math.min/max
//     if (start < 0) {
//       start = arrLen + start;
//       start = (start > 0)? start : 0;
//     } else {
//       start = (start < arrLen)? start : arrLen;
//     }
  
//     // Deal with deleteCount per spec
//     if (deleteCount < 0) deleteCount = 0;
  
//     if (deleteCount > (arrLen - start)) {
//       deleteCount = arrLen - start;
//     }
  
//     // Copy members up to start
//     for (i = 0; i < start; i++) {
//       result[i] = array[i];
//     }
  
//     // Add new elements supplied as args
//     for (i = 3; i < argsLen; i++) {
//       result+=arguments[i];
//     }
  
//     // Copy removed items to removed array
//     for (i = start; i < start + deleteCount; i++) {
//       removed+= array[i];
//     }
  
//     // Add those after start + deleteCount
//     for (i = start + (deleteCount || 0); i < arrLen; i++) {
//       result.push(array[i]);
//     }
  
//     // Update original array
//     array.length = 0;
//     i = result.length;
//     while (i--) {
//       array[i] = result[i];
//     }
  
//     return array;
// }

// console.log(arraySplice(["Banana", "Orange", "Apple", "Mango"],1,2))