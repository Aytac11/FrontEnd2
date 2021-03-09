// 1-500 arasindaki palindrome ededleri console-a cixarmaq

const checkPalidrom = (num) => {
    num = num.toString();
    let len = num.length;
    for(let i=0; i<len/2; i++){
        if(num[i] !== num[len-i-1]){
            return false;
        }
    return true;
    }

}

const findAllPalidroms = (start,end) =>{
    let count = 0;
    for(let i=start; i<end; i++){
        if(checkPalidrom(i)){
            count++;
        }
    }
    return count;
}

console.log(findAllPalidroms(1,500));