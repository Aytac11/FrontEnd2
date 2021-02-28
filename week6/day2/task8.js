//Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək
//Məsələn: SALAM => SAlam,  AT => AT,  at => AT

const str = "saGZHG";
let new_str = "";
let lastThird;

if(str.length<3){
    console.log(str.toUpperCase());
}

else{
    lastThird = str.slice(-3).toLowerCase();
    new_str = str.slice(0,-3) + lastThird;
}

    console.log("before: ",str);
    console.log("after: ",new_str);