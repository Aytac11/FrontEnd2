// indexOf()

const myIndexOf = (str, substr) =>{
	let len = str.length;
	let sublen = substr.length;
	let count = 0;
	if (sublen > len) {
		return -1;
	}
	for (let i = 0; i < len - sublen + 1; i++) {
		for (let j = 0; j < sublen; j++) {
			if (str[j+i] == substr[j]) {
				count++;
				if (count == sublen) {
					return i;
				}
			} 
			else {
				count = 0;
				break;
			}
		}
	}
	return -1;
}

console.log(myIndexOf("aytac", "tac"))

// const indexOfMy = (str, symbol) => {
// 	for (let i = 0; i < str.length; i++) {
// 		if(str[i] === symbol) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }

// console.log(indexOfMy("aytac","y"));