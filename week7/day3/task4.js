// indexOf()

const indexOfMy = (str, symbol) => {
	for (let i = 0; i < str.length; i++) {
		if(str[i] === symbol) {
			return i;
		}
	}

	return -1;
}

console.log(indexOfMy("aytac","y"));