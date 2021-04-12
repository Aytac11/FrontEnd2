let accordion = document.querySelectorAll('.accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        let text = this.nextElementSibling;
        if (text.style.display == "block" && this.children[0].classList.contains('fa-chevron-up')) {
            text.style.display = "none";
            this.children[0].classList.remove('fa-chevron-up');
            this.children[0].classList.add('fa-chevron-down');
        } else {
            text.style.display = "block";
            this.children[0].classList.remove('fa-chevron-down');
            this.children[0].classList.add('fa-chevron-up');
        }
    })
}