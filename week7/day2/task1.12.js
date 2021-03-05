// Verilmiş sözdəki qoşa yazılmış hərfləri yazmaq

// Məsələn: abbas => b, bass => s, abbas teyyarede => yb

const word = "abss";
let s = '';

for(let i=0; i<word.length; i++){
    if(word[i] == word[i+1]){
        s += word[i];
        
    }
}

console.log(s)