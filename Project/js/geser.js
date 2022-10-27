const about = document.querySelector('.about');
const card = document.querySelector('.kumpulan-crd');
const lan = document.querySelector('.second');
const lan2 = document.querySelector('.second2');
const analytics = document.querySelector('.baru');
const actions = document.querySelector('.baru2');

window.addEventListener('scroll', checkBox);
window.addEventListener('scroll', checkBox2);
window.addEventListener('scroll', checkBox3);
window.addEventListener('scroll', checkBox4);
window.addEventListener('scroll', checkBox5);


checkBox();
function checkBox() {
    const h = 1000;
    var top = this.scrollY;
    if (top > h){
        about.classList.add('show')
    } else {
        about.classList.remove('show')
    }
}

function checkBox2() {
    const h = 1300;
    var top = this.scrollY;
    if (top > h){
        card.classList.add('show2');
    }
    else {
        card.classList.remove('show2');
    }
}

function checkBox3() {
    const h =100;
    var top = this.scrollY;
    if (top > h){
        lan.classList.add('show2');
        lan2.classList.add('show');
    }
    else {
        lan.classList.remove('show2');
        lan2.classList.remove('show');
    }
}

function checkBox3() {
    const h =100;
    var top = this.scrollY;
    if (top > h){
        lan.classList.add('show2');
        lan2.classList.add('show');
    }
    else {
        lan.classList.remove('show2');
        lan2.classList.remove('show');
    }
}

function checkBox4() {
    const h = 100;
    var top = this.scrollY;
    if (top > h ){
        analytics.classList.add("show");
    } else {
        analytics.classList.remove("show")
    }
}

function checkBox5() {
    const h = 800;
    var top = this.scrollY;
    if (top > h ){
        actions.classList.add("show");
    } else {
        actions.classList.remove("show");
    }
}