function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    random = getRandomInt(1, 7);

})

var dot4 = document.querySelectorAll('.dot4');
for (let i = 0; i < dot4.length; i++) {
    dot4[i].style.display = 'none'
}

// var first = getRandomInt(1, 7);
// var second = getRandomInt(1, 7);

// console.log(first);
// console.log(second);
// console.log(first + second);