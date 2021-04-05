var animations = [
    'jump',
    'spin',
    'grow',
    'shake',
    'fadeIn'
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var img = document.querySelectorAll('.image');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        var sushi = this;
        var animation = animations[getRandomInt(0, 4)];

        sushi.classList.add(animation);

        setTimeout(function() {
            sushi.classList.remove(animation);
        }, 1000);
    })
}