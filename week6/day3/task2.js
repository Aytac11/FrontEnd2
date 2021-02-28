//Array-də lazımı əməliyyatları edəndən sonra “Mercedez - Audi - Opel” string-ini yaratmaq.
//["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"]

const arr = ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"];
const new_arr = arr.slice(2,5);
console.log(new_arr.join(' - '));