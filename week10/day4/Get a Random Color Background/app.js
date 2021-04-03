// Day 3 - Get a Random Color Background
// red, blue, green, yellow
// button-a click ende sira ile bu rengler body-ye verilsin. rengler qurtarandan sonra yeniden basa(evvele) qayidin

const body = document.querySelector('body');
const btn = document.querySelector('#button');
const colors = ['red', 'blue', 'green', 'yellow'];


let i = 0;
btn.addEventListener('click', function() {
    //var randomize = Math.floor(Math.random() * colors.length);
    let color = '';
    color = colors[i];
    i++;
    if (i === colors.length) {
        i = 0;
    }
    body.style.backgroundColor = color;
})