//Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək
//Məsələn: SALAM => SAlam,  AT => AT,  at => AT

const str = "SALAM";
let newStr = "";

if(str.length < 3){
    console.log(str.toUpperCase());
}

else{
    for(let i = 0; i < str.length-3; i++){
        newStr += str[i];
    }
    
    for(let j = str.length-3; j<str.length; j++){
        newStr += str[j].toLowerCase();
    }
    
    console.log(newStr);
}