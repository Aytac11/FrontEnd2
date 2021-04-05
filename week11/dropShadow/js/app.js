let img = document.querySelectorAll(".img");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        let shadow = this.style.boxShadow;
        //console.log(shadow)
        let arr = shadow.split('px');
        let newBlur = parseInt(arr[arr.length - 3]) + 1;
        // console.log(newBlur)
        let newVert = parseInt(arr[arr.length - 2]) + 3;
        // console.log(newVert)
        this.style.boxShadow = 'rgba(-1, 1, 0, 0.35 ) 0px 0px' + ' ' + newBlur + 'px' + ' ' + newVert + 'px';
    })

}

let text = document.querySelector('.text');
text.addEventListener('click', function() {
    let shadow = this.style.textShadow;
    //console.log(shadow)
    let arr = shadow.split('px');
    let newBlur = parseInt(arr[arr.length - 2]) + 1;
    //console.log(newBlur)
    let newVert = parseInt(arr[arr.length - 3]) + 1;
    //console.log(newVert)
    this.style.textShadow = 'rgb(0, 1, 0 ) 1px' + ' ' + newBlur + 'px' + ' ' + newVert + 'px';
})