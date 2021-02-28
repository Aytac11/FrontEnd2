// Verilmiş sözün son 3 hərfini dövrdən istifadə edərək kiçik hərflərlə yazmaq. 

// Məsələn: SALAM => SAlam

const str = "SALAM";
let a ="";
let n;

for(let j = 0; j<str.length; j++){
    if(j>= str.length-3){
        n= str[j].toLowerCase();
        a+=n;
    }
    else{
        a+=str[j];
    }
}
console.log(a)