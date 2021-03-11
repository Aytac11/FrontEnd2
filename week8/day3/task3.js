// 3) INPUT: arr=[10,2,10,10,2,5,11]

// OUTPUT: {
//       10:3,
//      2:2,
//      5:1,
//      11:1
//     }

//--------------method1----------------//

const myPush = (arr, value) => {
    arr[arr.length] = value;
    return arr;
}

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function findCount(arr) {
    let a = [];
    let b = [];
    let prev;
    let obj;
    arr = bubbleSort(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            myPush(a, arr[i]);
            myPush(b, 1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }
    for (let j = 0; j < a.length; j++) {
        obj = { "Element": a[j], "Count": b[j] }
        console.log(obj);

    }
    return "complete";
}

console.log(findCount([10, 2, 10, 2, 5]))



// console.log(bubbleSort([10, 2, 10, 2, 5]))
// --------------method2----------------------//

// let arr = [10, 2, 10, 10, 2, 5, 11];
// let obj = {};

// arr.forEach(elem => {
//     if (obj[elem]) {
//         obj[elem] = obj[elem] + 1;
//     } else {
//         obj[elem] = 1;
//     }
// });

// console.log(obj);