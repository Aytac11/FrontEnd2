// task1
// Hazırkı(текущий) tarixi bu formatlarda yazın: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.

var date= new Date();

const mm = String(date.getMonth()+1).padStart(2,0);
const dd = String(date.getDate()).padStart(2,0); 
const yyyy = String(date.getFullYear()).padStart(4,0);
console.log(mm + "-" + dd + "-" + yyyy);
console.log(mm + "/" + dd + "/" + yyyy);
console.log(dd + "-" + mm + "-" + yyyy);
console.log(dd + "/" + mm + "/" + yyyy);

