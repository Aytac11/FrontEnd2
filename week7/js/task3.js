//rəqəmlərinin cəmi 10-dan kiçik olanları tapsın
const find = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let s = 0;
        while (arr[i] > 0) {
            let remainder = arr[i] % 10;
            arr[i] = Math.floor(arr[i] / 10);
            s += remainder;
        }
        if (s < 10) {
            newArr.push(s);

        }
    }
    return newArr;

}

console.log(find([1, 4, 56, 23, 67, 89, 145, 89, 200, 35]))