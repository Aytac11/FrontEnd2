//Armstronq ededler=> 371=>3^3+7^3+1^3=27+343+1=371 (Armstronq ededler) //Verilmis ededin armstronq eded olub olmadigini mueyyen eden proqram

const checkArmstrong = (num) => {
    num = num.toString();
    let len = num.length;
    let s = 0;
    for(let i = 0 ; i<len; i++){
        s += Number(num[i]) ** len;        
    }

    if(s !== Number(num) ){
        return false;
    }
    return true;
}


console.log(checkArmstrong(371));