window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    const nav = document.querySelector("nav");

    if (top > 500){
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }

    console.log(top)
}, false);  




