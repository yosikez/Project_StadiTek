const json = localStorage.getItem('form');
const obj = JSON.parse(json);
const signin = document.querySelector('form');
const datasgn = {};

signin.addEventListener('submit', (e) => {
    e.preventDefault();
    const sgn = new FormData(signin);

    const datasgn = Object.fromEntries(sgn);

    console.log(datasgn.username)
    if (datasgn.username == obj.username && datasgn.password == obj.password) {
        alert("login berhasil");
        window.location.href = "index.html";
    }
    else if (datasgn.username != obj.username){
        alert("pastikan username anda benar")
    }
    else if (datasgn.password!= obj.password){
        alert("pastikan password anda benar")
    }
    const json = JSON.stringify(datasgn);

    localStorage.setItem('sign', json);

})




console.log(obj.username)
console.log(obj.password)