const a = 'yusif'; // fisuy
let s = "";


const reverse = (str) => {
	for (let i = str.length - 1; i >= 0; i--) {
		s += str[i];
    }
    return s;
}

console.log(reverse(a));