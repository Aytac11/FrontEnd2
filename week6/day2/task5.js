//Verilmiş 2 ədədin hansının 50-yə daha yaxın olduğunu tapmaq. Mümkün şərtləri proqramda
//nəzərə alın və uyğun mesajı(yaxin və ya uzaq) çıxarın

const a = -1;
const b = -5;

if(Math.abs(50 - a) == Math.abs(50 - b)){
    console.log("eyni mesafededirler.")
}

else if( (50-a < 50-b && 50-a>0 && 50-b>0) || ( 50-a > 50-b && 50-a<0 && 50-b<0)){
    console.log("a daha yaxindir")
}

else if(a===50){
    console.log( "a 50ye beraberdir.")
}

else if(b===50){
    console.log( "b 50ye beraberdir.")
}

else {
    console.log("b daha yaxindir")
}
