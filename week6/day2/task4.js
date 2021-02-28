// Verilmiş 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və
// ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.

const a = 60;
const b = 10;

if(a>30 && a<70 && b>30 && b<70){
    console.log("Her ikisi 30-70 arasindadir.")
}

else if((a<=30 || a>=70) && (b<=30 || b>=70)){
    console.log("Hec biri 30-70 araliginda deyil.")
}

else {
    console.log("Yalniz 1-i 30-70 araligindadir.")
}
