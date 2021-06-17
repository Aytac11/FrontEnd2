const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const logo = document.querySelector('.logo');

openMenu.addEventListener('click', function() {
    mainMenu.style.display = 'flex';
    openMenu.style.opacity = "0"
    logo.style.opacity = "0";
    mainMenu.style.top = '0';
});
closeMenu.addEventListener('click', function() {
    mainMenu.style.top = '-100%';
    openMenu.style.opacity = "100%"
    logo.style.opacity = "100%";
});

$(document).ready(function() {

    var headerHeight = $('header').outerHeight(); // Target your header navigation here

    $('#main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
        }, 1000);

        e.preventDefault();
    });
});

$('.content-wrapper').scrollSpy({
    target: $('.menu a')
}).scroll();

$('.content-wrapper').scrollSpy({
    target: $('.menu a'),
    activeClass: 'active'
}).scroll();

$('.content-wrapper').scrollSpy({
    target: $('.menu a'),
    fixed: true
}).scroll();