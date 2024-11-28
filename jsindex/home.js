let logoutButton = document.getElementById("logoutButton");


logoutButton.addEventListener("click"  ,  function (e) {
    e.preventDefault();
    localStorage.removeItem("users");




    window.location.href = "./index.html"
})
let users = JSON.parse(localStorage.getItem("users"))

    document.getElementById("welcomehome").innerText =`WELCOME , ${users.Name}`
