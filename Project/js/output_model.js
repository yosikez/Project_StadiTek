const json = localStorage.getItem('form')
const obj = JSON.parse(json);

const dataSbaru = localStorage.getItem('sign');
const obj1 = JSON.parse(dataSbaru);

console.log(obj1)




const judul = document.querySelector("#judul");
const deskripsi = document.querySelector("#deskripsi");
const field_1 = document.querySelector("#field-1");
const field_2 = document.querySelector("#field-2");
const field_3 = document.querySelector("#field-3");
const field_4 = document.querySelector("#field-4");
const kumpulanCard = document.querySelector("#kumpulan-card");

console.log(obj)



judul.innerHTML = obj.nama
deskripsi.innerHTML = obj.deskripsi



if (obj.field_1 != "") {
    const card = document.createElement('div');
    card.classList.add("crd");

    const chart = document.createElement('div');
    chart.classList.add("pie");
    chart.classList.add("animate");
    chart.style = "--p:70; c:skyblue;"
    const value = document.createTextNode('70%');

    const field_1 = document.createElement('p');
    field_1.id = "field-1";
    field_1.innerHTML = obj.field_1;

    chart.appendChild(value);
    card.appendChild(chart);
    card.appendChild(field_1);
    kumpulanCard.appendChild(card);
}
if (obj.field_2 != "") {
    const card = document.createElement('div');
    card.classList.add("crd");

    const chart = document.createElement('div');
    chart.classList.add("pie");
    chart.classList.add("animate");
    chart.style = "--p:30; c:skyblue;"
    const value = document.createTextNode('30%');

    const field_2 = document.createElement('p');
    field_2.id = "field-1";
    field_2.innerHTML = obj.field_2;

    chart.appendChild(value);
    card.appendChild(chart);
    card.appendChild(field_2);
    kumpulanCard.appendChild(card);
}
if (obj.field_3 != "") {
    const card = document.createElement('div');
    card.classList.add("crd");

    const chart = document.createElement('div');
    chart.classList.add("pie");
    chart.classList.add("animate");
    chart.style = "--p:80; c:skyblue;"
    const value = document.createTextNode('80%');

    const field_3 = document.createElement('p');
    field_3.id = "field-1";
    field_3.innerHTML = obj.field_3;

    chart.appendChild(value);
    card.appendChild(chart);
    card.appendChild(field_3);
    kumpulanCard.appendChild(card);
}
if (obj.field_4 != "") {
    const card = document.createElement('div');
    card.classList.add("crd");

    const chart = document.createElement('div');
    chart.classList.add("pie");
    chart.classList.add("animate");
    chart.style = "--p:50; c:skyblue;"
    const value = document.createTextNode('50%');

    const field_4 = document.createElement('p');
    field_4.id = "field-1";
    field_4.innerHTML = obj.field_4;

    chart.appendChild(value);
    card.appendChild(chart);
    card.appendChild(field_4);
    kumpulanCard.appendChild(card);
}

if (obj.username != '' && obj.password != '') {
    const signout = document.querySelector("#signin");
    const newsign = document.createElement('a');
    const nama = document.querySelector("#varname");
    const gantiContent = document.querySelector(".log");
    const landing = document.querySelector(".lan");

    const nav = document.querySelector(".nav-tab");
    const navBaru = document.createElement("a");
    const namaNavBaru = document.createTextNode("Channel");

    const gin = document.querySelector("#signinn")
    navBaru.href = "sy.html";

    navBaru.appendChild(namaNavBaru);
    nav.insertBefore(navBaru, nav.children[3]);
    
    gin.style = "display: none"
    // untuk mengganti sign in dengan sign out
    // newsign.innerHTML = '<a id="signout" href="#">Sign Out</a>';
    newsign.id = "signout";
    newsign.style = "cursor: pointer;"
    const value = document.createTextNode("Sign Out");
    newsign.appendChild(value);
    signout.parentNode.replaceChild(newsign, signout)
    
    if (window.location.pathname == "/html/index.html"){
    // untuk menampilkan nama di welcome
    nama.innerHTML = " " + obj.username;
    
    // untuk menampilkan welcome
    landing.style = "display: none";
    gantiContent.style = "display: contents";
    }

}

const keluar = document.querySelector("#signout");
keluar.addEventListener('click', function () {
    localStorage.removeItem('sign');
    location.reload();
    window.location.href = "index.html"
    keluar.innerHTML = signout;
})
