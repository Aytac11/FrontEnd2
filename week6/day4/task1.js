// Array-dəki dəyərləri bu formada dövr ilə çıxarmaq: BMW - Fiat - Mercedez - Audi - Opel - Bentley
// ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"]

const arr = ["BMW", "Fiat", "Mercedez", "Audi", "Opel", "Bentley"];
let s = '';

for (let i=1; i<arr.length; i++){;
    s+= " - " + arr[i]
}

console.log(arr[0],s)