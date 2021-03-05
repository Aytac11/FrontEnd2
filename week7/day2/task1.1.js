// Verilmiş sözü əks istiqamətə çevirmək.
// Məsələn: veb => bev

const word = "aytac";
let s = "";
for(let i=word.length-1; i>=0; i--){
    s+=word[i];
}

console.log(s);