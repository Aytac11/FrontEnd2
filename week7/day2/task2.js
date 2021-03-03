const alph = "abcçdeəfgğhxıijkqlmnoöprsştuüvyz";
let s = '';


var findSen =(word,alph) => {
    for(let i = 0; i<alph.length; i++){
        for(let j = 0; j < word.length; j++){
            if(alph[i] == word[j]){
                s += alph[i+1];
            }
        }
    }
    return s;
}

console.log(findSen("abc",alph));