// 16) Verilmiş iki sözdən, birindən digərini yaratmaq olarmı deyə yoxlamaq. Olarsa true, əks halda false göstərsin.

// Məsələn: lotto, otlot => true ||| pul, upl => true ||| salam, lasas => false

// const word1 = "loot";
// const word2 = "otlqot";

const Found = (word1, word2) => {
	let isFound;

	for (let i = 0; i < word1.length; i++) {
		isFound = false;

		for (let j = 0; j < word2.length; j++) {
			if(word1[i] === word2[j]) {
				isFound = true;
				break;
			}
		}

		if(isFound === false) {
			return false;
		}
	}

	return true;
}
console.log(Found('lottoa', 'ottlot'));
console.log(Found('pul', 'upl'));
console.log(Found('salam', 'lasas'));

