//2 rəqəmli ədədləri tapsın
const findTwodigitNumbers = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i]);
        if (arr[i].length === 2) {
            newArr.push(Number(arr[i]));
        }
    }
    return newArr;
}

console.log(findTwodigitNumbers([1, 4, 56, 23, 67, 89, 145, 89, 200, 35]))