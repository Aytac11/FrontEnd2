// Verilmiş sözün son 3 hərfini kiçik hərflə yazmaq. Əgər verilmiş söz 3 simvoldan kiçikdirsə, bütün hərflərini böyüyə çevirmək

const word = "Ata";

let new_word;

if(word.length>=3){
    new_word = word.slice(0,-3) + word.slice(-3).toLowerCase();
}
else{
    new_word = word.toUpperCase();
}
console.log(new_word);