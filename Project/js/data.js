
const json = localStorage.getItem('sign');
const obj = JSON.parse(json);

// for (key in obj) {
//     console.log(obj)
// }    

console.log(obj);

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




