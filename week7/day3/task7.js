// trim()

const trimMy = (str)=>{
    let s = "";
    for (let i = 0; i < str.length; i++) {
        if(i>=0 && str[i] !== " " || (i>0 && str[i+2]!==" " && str[i-1]!==0)){
            s += str[i];
        }
    }
    return s;
}

console.log(trimMy("                        a bc"))
