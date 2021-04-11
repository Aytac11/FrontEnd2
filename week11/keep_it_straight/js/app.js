const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }
}

title = document.querySelector('.title');

addEvent('div.out', 'mouseleave', e => {
    title.innerText = 'Fail'
});

addEvent('.end', 'mouseenter', e => {
    //if (e.target.getAttribute('data-target') === 'start')
    title.innerText = 'Win'


})