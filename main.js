window.onscroll = function() {
    var bar = document.querySelector("nav");
    this.scrollY > window.innerHeight / 2 - bar.clientHeight ? bar.style.backgroundColor = '#16202a' : bar.style.backgroundColor = 'transparent';
}
