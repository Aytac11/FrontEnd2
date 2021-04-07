var tabButton = document.querySelectorAll('.tab-button');
var content = document.querySelectorAll('.content');

for (let j = 0; j < tabButton.length; j++) {
    tabButton[j].addEventListener('click', function() {

        var data = this.getAttribute('data-target');
        // console.log(data);

        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
        }

        var id = content[j].getAttribute('id');
        //console.log(id)
        if (data === id) {
            content[j].classList.add('active');
        }
    })
}