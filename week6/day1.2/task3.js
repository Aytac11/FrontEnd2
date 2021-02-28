// task3
// Hazırki günü və vaxtı göstərən proqram yazmaq <br>
// Məsələn: Bugün : Cümə. Vaxt: 16:50:22

const date = new Date();
const days = ["Bazar ertesi", "Cersenbe axsami","Cersenbe","Cume axsami", "Cume","Senbe","Bazar"];

const day = days[date.getDay()-1];
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log("Bugun : " + day);
console.log("Vaxt : " + hour + ":" + minute + ":" + second)
