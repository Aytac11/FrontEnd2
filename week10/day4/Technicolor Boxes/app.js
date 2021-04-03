var str = "";
for (var i = 0; i <= 62; i++) {
    str += "<div class='box' onmouseover='change_background(event)'></div>"
}
document.getElementById("main").innerHTML += str;

function change_background(event) {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    event.target.style = "background-color: rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
}


// let box = document.createElement('div');
// for (var i = 0; i <= 20129; i++) {
//     str += box.addEventListener('onmouseover', function(event) {

//         var randomRed = Math.floor(Math.random() * 255);
//         var randomGreen = Math.floor(Math.random() * 255);
//         var randomBlue = Math.floor(Math.random() * 255);
//         event.target.style = "background-color: rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

//     })
// }
// document.getElementById("main").innerHTML += str;