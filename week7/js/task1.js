//cüt ədədləri tapsın
const findEvenNumbers = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(findEvenNumbers([1, 4, 56, 23, 67, 89, 145, 89, 200, 35]))