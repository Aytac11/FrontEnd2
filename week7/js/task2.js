//tək ədədlər tapsın

const findOddNumbers = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(findOddNumbers([1, 4, 56, 23, 67, 89, 145, 89, 200, 35]))