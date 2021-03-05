// trim()

const str = "                        abc";
let s = "";

for (let i = 0; i < str.length; i++) {
    if(str[i] !== " "){
    s += str[i];
    }
}
console.log(s);