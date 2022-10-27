const newChannel = document.querySelector("#newchannel");
const sendNChannel = document.querySelector("form");


newChannel.addEventListener("click", function() {
    const myChannelHide = document.querySelector(".my");
    const dispForm = document.querySelector(".createchannel");


    myChannelHide.style = "display:none;"
    dispForm.style = "display:contents;"
})

sendNChannel.addEventListener("submit", (x) => {
    x.preventDefault();
    const fd = new FormData(sendNChannel);
    const obj = Object.fromEntries(fd); 
    const json = JSON.stringify(obj)

    localStorage.setItem('form', json);
    window.location.href = "sy_model.html"
})