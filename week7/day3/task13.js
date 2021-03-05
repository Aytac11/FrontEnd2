let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
let s = "";

for (let i = 2; i < fruits.length; i++) {
    s += fruits[i] + " ";
}

console.log(s)