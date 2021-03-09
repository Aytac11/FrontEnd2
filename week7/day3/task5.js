// replace

function mySubstring(str,start,end) {
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

  const myIndexOf = (str, substr) =>{
	let len = str.length;
	let sublen = substr.length;
	let count = 0;
	if (sublen > len) {
		return -1;
	}
	    for (let i = 0; i < len - sublen + 1; i++) {
			for (let j = 0; j < sublen; j++) {
				if (str[j+i] == substr[j]) {
					count++;
					if (count == sublen) {
						return i;
					}
				} 
				else {
					count = 0;
					break;
				}
        	}
    	}
    return -1;
}

function myReplace(str, find, newToken)
{
    let i = -1
    if (!str && (str == null) && (find == null)){
        return newToken;
    }

    i = i+newToken.length;
    while((i = myIndexOf(str, find)) !==-1){

        if(i>0 || i==0){
            str = mySubstring(str,0, i) + newToken + mySubstring(str,i + find.length);
            
        }
      
    }
    return str;
}
console.log(myReplace("Visit Microsoft!","Microsoft","W3Schools"))

