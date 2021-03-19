// minimum 2 reqemli ve 10-dan yuxari. bir reqemi silerek, en boyuk musbet deyeri goster
// input: 100 => 10, 1245 => 245, 9582 => 982

const push = (arr, value) => {
    arr[arr.length] = value;
    return arr;
}

function slice(str, start, end) {
    let s = "";
    if (arguments.length == 2) {
        if (start > 0) {
            for (let i = start; i < str.length; i++) {
                s += str[i];
            }
        }
        if (start < 0) {
            let start2;
            start2 = str.length + start;
            for (let i = start2; i < str.length; i++) {
                s += str[i];
            }
        }
    }
    if (arguments.length == 3) {
        if (start >= 0 && end >= 0) {
            for (let i = start; i < end; i++) {
                s += str[i];
            }
        } else if (start < 0 && end < 0) {
            let end2;
            end2 = str.length + end;
            let start2;
            start2 = str.length + start;
            for (let i = start2; i < end2; i++) {
                s += str[i];
            }
        } else {
            s = "";
        }

    }
    return s;
}

let num = 123467;
num = num.toString();
const numbers = [];

const cut = (num, index) => {
    const part1 = slice(num, 0, index);
    const part2 = slice(num, index + 1);
    return part1 + part2;
}

for (let i = 0; i < num.length - 1; i++) {
    push(numbers, Number(cut(num, i)));
}

const sort = (nums) => {
    let s = '';
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let max = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = max;
                push(s, max);
            }
        }
    }
    return s;
}


console.log(num);
sort(numbers);
console.log(numbers[0]);