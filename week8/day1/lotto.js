const card = [
	[
		[2, '', 'X', '', 43, 'X', 60, '', ''],
		['', 'X', 21, '', 43, '', 60, '', ''],
		[2, '', '', '', 43, '', 60, '', '']
	],
	[
		[2, '', 'X', '', 43, 'X', 60, '', ''],
		['', 'X', 21, '', 43, '', 60, '', ''],
		[2, '', '', '', 43, '', 60, '', '']
	],
	[
		[2, '', 'X', '', 43, 'X', 60, '', ''],
		['', 'X', 21, '', 43, '', 60, '', ''],
		[2, '', '', '', 43, '', 60, '', '']
	]
];

let s = "";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let random;

for(let i = 0; i<90; i++){
random = getRndInteger(0,90);
    s=random;
    for(let j = 0; j < s.length+1; j++){
        if(random !== s[j]){
            s += random;
        }

    }

    console.log(s);
}
// 2 




