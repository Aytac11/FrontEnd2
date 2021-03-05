// substring()

function substringMy(str,start,end) {
    let s ="";
    if (arguments.length == 2) {
            if(start >0){
                for (let i = start; i < str.length; i++) {
                    s += str[i];
                }
            }
            if(start<0){
                s = str;
            }
    }
    if(arguments.length == 3){
        for (let i = start; i < end; i++) {
            s += str[i];
        }
    }
    return s;
  }

console.log(substringMy("Apple, Banana, Kiwi",-1));
console.log(substringMy("Apple, Banana, Kiwi",5,10));
console.log(substringMy("Apple, Banana, Kiwi",0,8));