const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }
}

addEvent('#start', 'click', () => {
    const timer = setInterval(() => {
        var btn = document.querySelector('#start')
        var disp = document.querySelector("#count");
        disp.style.display = "flex";
        btn.style.display = "none";

        var count = 0;
        addEvent('body', 'click', () => {
            count++;
            disp.innerHTML = count;
        })
    }, 3000);

    //clearInterval(timer);
})