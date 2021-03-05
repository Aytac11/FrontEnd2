// Verilmiş ədədi verilmiş ədədə tam bölünənə kimi dövr etdirmək. Sonda alınan nəticəni yazmaq.
// Məsələn: 16, 2 => 1 (izah: 16:2=8, 8:2=4, 4:2=2, 2:2=1, 1:2=0.5). Cavab 1
// 18, 3 => 2 (izah: 18:3=6, 6:3=2, 2:3=0.66). Cavab 2
// 19, 5 => 19 (izah: 19:5=3.8). Cavab 19


//-----------method1-----------------
let num1 = 15;
let num2 = 3;
let r ;
let isTrue;
while(num1>1){
    isTrue = false;
    r = num1 % num2;
    if(r !== 0 && num1 === Math.floor(num1) ){
        isTrue = false;
        break;
    }
    else{
        isTrue = true;
    }
    num1 = num1 / num2;
}
console.log(num1)

//--------------method2----------------

const myLoop = (num1, divide) => {
	while(num1 % divide === 0) {
		num1 = num1 / divide;
	}
	return num1;
}

console.log(myLoop(15,3))
