const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }
}


addEvent('div.out', 'mouseenter', e => {
    e.target.style.backgroundColor = 'black';
});

addEvent('div.out', 'mouseleave', e => {
    e.target.style.backgroundColor = 'yellow';
});