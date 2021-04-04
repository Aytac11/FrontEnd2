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


// var items = document.querySelectorAll('.item');

// for (var i = 0; i < items.length; i++) {
//     items[i].addEventListener('mouseenter', function() {
//         //console.log('enter');
//         this.style.backgroundColor = RandomBgColorGenerate();
//         this.style.boxShadow = 'white 0px 0px 8px';
//     });

//     items[i].addEventListener('mouseleave', function() {
//         // console.log('out');
//         this.style.boxShadow = 'none';
//     });
// }


// function RandomBgColorGenerate() {
//     var randNum = Math.random().toString(16);
//     return '#' + randNum.slice(2, 8);
// }

// console.log(RandomBgColorGenerate());