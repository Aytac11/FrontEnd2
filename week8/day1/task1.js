let arr = [1, 1, 2, 3, 2, 2, 2, 8, 8, 1, 9];
let obj;
let count = 1;
let max = 0;
let num;

for (let i = 0; i < arr.length - 1; i++) {
	if(arr[i] === arr[i+1]) {
		count++;

		if(count > max) {
			max = count;
			num = arr[i];
			obj = {count: max, number: arr[i]};
		}
	} else {
		count = 1;
	}
}

console.log(obj);