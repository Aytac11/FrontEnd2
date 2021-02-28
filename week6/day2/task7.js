// Verilmiş ədədin 1-10 arasında çıxarılmış random ədəd ilə uyğun gəlib-gəlməmisini yoxlamaq. Əgər uyğundursa “uygundur”, deyilsə “uygun deyil” yazılsın

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const rand = random(1,10);
console.log(rand)
const num = 4;

if(rand === num){
    console.log("uygundur")
}
else
    console.log("uygun deyil")