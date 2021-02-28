// Adınızın 2 və 3-cü hərfini böyük hərflə yazmaq <br>
// Məsələn: anar => aNAr

const name = "anar";
const sd = name[1].toUpperCase();
const tr = name[2].toUpperCase();

let s = name[0] + sd + tr + name.slice(3);
console.log(s);