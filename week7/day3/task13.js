//splice

const myPush = (arr,value) => {
  arr[arr.length]=value;
  return arr;
}

function arraySplice(array, start, delCount) {
    var result = [];
    var removed = [];
    var argsLen = arguments.length;
    var arrLen = array.length;
    var i;
  
    if (start < 0) {
      start = arrLen + start;
    }  
    if(delCount < 0){
      delCount = 0;
    } 
  
    if(delCount > (arrLen - start)) {
      delCount = arrLen - start;
    }
  
    for (i = 0; i < start; i++) {
      result[i] = array[i];
    }
  
    // Add new args
    for (i = 3; i < argsLen; i++) {
      myPush(result,arguments[i]);
    }
  
    // removed
    for (i = start; i < start + delCount; i++) {
      myPush(removed,array[i]);
    }
  
    // Add those after start + delCount
    for (i = start + delCount; i < arrLen; i++) {
      myPush(result,array[i]);
    }
  
    // Update original array
    array.length = 0;
    i = result.length;
    while (i--) {
      array[i] = result[i];
    }
  
    let obj ={"original":array, "removed":removed};
    return obj;
}

console.log(arraySplice(["Banana", "Orange", "Apple", "Mango"],0,2,"Kiwi"))