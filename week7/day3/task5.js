// replace

const replaceMy = (str,value) =>{
    for(let i= 0; i<str.lenght; i++){
        if(str[i] === value[0]){
            str[i] = value[1];
        }
    }
    return str;
}

console.log(replaceMy("Please visit Microsoft!",("Microsoft", "W3Schools")))