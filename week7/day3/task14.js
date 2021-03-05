//split

const splitMy = (str, spltValue) =>{
    let s = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === spltValue){
            s = str[i];
        }        
    }
    return s;
}

console.log(splitMy("a,b,c,d,e",","))