// toString

const toStringMy = (value) =>{
    if(typeof value === "number"){
        s = ""+value;
        return s;
    }
    if(typeof value === "object"){
        l = value[0];
        for (let i = 1; i < value.length; i++) {
            l += "," + value[i];            
        }
        return l;
    }
}
console.log(toStringMy(24));
console.log(toStringMy([24,"ert"]));
