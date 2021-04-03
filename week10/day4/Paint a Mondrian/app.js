var box1 = document.querySelector('.box1');
box1.style.backgroundColor = 'red';
var boxColor = box1.style.backgroundColor;
// console.log(box1Color);


var box2 = document.querySelector('.box2');
box2.style.backgroundColor = 'yellow';
var boxColor = box2.style.backgroundColor;

var box3 = document.querySelector('.box3');
box3.style.backgroundColor = 'green';
var boxColor = box3.style.backgroundColor;

var box4 = document.querySelector('.box4');
box4.style.backgroundColor = 'blue';
var boxColor = box4.style.backgroundColor;

var row = document.querySelectorAll('.row')

let bgColor;
box1.addEventListener('click', function() {
    bgColor = this.style.backgroundColor;
});

window.onclick = e => {
    //console.log(e.target); // to get the element
    //console.log(e.target.tagName); // to get the element tag name alone
    let change = '';
    if (e.target === '')
        e.target.style.backgroundColor = 'red'
}

// for (let i = 0; i < row.length; i++) {
//     let row_con = '';
//     row_con=row[i];
// }

// row[i].addEventListener('click', function() {
//     let rows='';
//     this.style.backgroundColor = bgColor;
//     i++;
// })

// let i = 0;
// btn.addEventListener('click', function() {
//     let color = '';
//     color = colors[i];
//     i++;
//     if (i === colors.length) {
//         i = 0;
//     }
//     body.style.backgroundColor = color;
// })