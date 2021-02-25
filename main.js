window.onscroll = function() {
    var bar = document.querySelector("nav");
    if(this.scrollY > window.innerHeight / 8 - bar.clientHeight) {
        bar.style.backgroundColor = '#16202a';
        bar.style.border = 'none';
    } else {
        bar.style.backgroundColor = 'transparent';
        bar.style.borderBottom = '1px solid gray';
    }
}
