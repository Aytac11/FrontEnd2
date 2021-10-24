let arr = [678, 'Freelance', [99, 21, [99, 12, 456, ['Simon”, ”Holly'], 78, 34], 45, 67], 45, 67, 89, 'Raymond', 23, true, 'Michael', 'Joseph', 545, 188, 29];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             for (let l = 0; l < arr[i][j][k].length; l++) {
//                 console.log(arr[0]);
//             }
//         }
//     }
// }
const arrayProduct = ([front, ...end]) => {
    if (front === undefined) {
        return 1;
    };
    return arrayProduct(end);
};
console.log(arrayProduct(arr));