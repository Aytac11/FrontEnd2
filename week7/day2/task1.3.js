// Reqemlerden ibaret verilmis array-in en boyuk reqemini tapib, diger butun reqemleri onunla evezlemek
// meselen: [12, 10, 3] => [12, 12, 12]
//     [10, 3, 29, 15] => [29, 29, 29, 29]

// method1
const arr = [10, 18, 3];
max = arr[0];
let s = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

for (let j = 0; j < arr.length; j++) {
    s.push(max);
}

// method2
// var s = [];
// var newarr = arr.sort(function(a, b) { return b - a })
// for (let i = 0; i < newarr.length; i++) {
//     s.push(newarr[0]);
// }
console.log(s);