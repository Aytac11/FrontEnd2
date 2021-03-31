// Arrayda bir elementi ozunden sonraki elementle deyismek

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length - 1; i += 2) {
    let temp;
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}

console.log(arr)