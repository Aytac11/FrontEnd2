//Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin
let item = document.querySelector(".item");

let n = window.prompt("Enter anything")

n = Number(n);
let m = 2 * n;

if (isNaN(m)) {
    alert("enter number!")
} else {
    item.innerHTML = m;
}