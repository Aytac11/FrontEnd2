// slice()

function sliceMy(str,start,end) {
    let s ="";
    if (arguments.length == 2) {
            if(start > 0){
                for (let i = start; i < str.length; i++) {
                    s += str[i];
                }
            }
            if(start<0){
                let start2;
                start2 = str.length + start;
                for (let i = start2; i < str.length; i++) {
                    s += str[i];
                }
            }
    }
    if(arguments.length == 3){
        if(start >= 0 && end >= 0){
            for (let i = start; i < end; i++) {
                s += str[i];
            }
        }
        else if(start < 0 && end < 0){
            let end2;
            end2 = str.length + end;
            let start2;
            start2 = str.length + start;
            for (let i = start2; i < end2; i++) {
                s += str[i];
            }
        }

        else{
            s = "";
        }
        
    }
    return s;
  }

console.log(sliceMy("Apple, Banana, Kiwi",-4));
console.log(sliceMy("Apple, Banana, Kiwi",5,10));
console.log(sliceMy("Apple, Banana, Kiwi",0,8));
console.log(sliceMy("Apple, Banana, Kiwi",-12,-5));