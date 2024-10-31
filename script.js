document.getElementById("form_login").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "") {
        alert("Username tidak boleh kosong!");
        event.preventDefault();
    } else if (password === "") {
        alert("Password tidak boleh kosong!");
        event.preventDefault();
    } else if (username !== "yusuf") {
        alert("Username tidak ditemukan!");
        event.preventDefault();
    } else if (password !== "4321") {
        alert("Password salah!");
        event.preventDefault();
    }
});

document.getElementById("username").addEventListener("mouseover", function() {
    this.setAttribute('title', 'isikan username sesuai dengan registrasi');
});

document.getElementById("password").addEventListener("mouseover", function() {
    this.setAttribute('title', 'isikan password sesuai dengan registrasi');
});

var TombolLogin = document.getElementById("TombolLogin");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");

TombolLogin.addEventListener("mouseover", function() {
    if (usernameField.value === "" || passwordField.value === "") {
        TombolLogin.textContent = "Isikan Dulu Ya!";
        TombolLogin.classList.add("hover-red");
    }
});

TombolLogin.addEventListener("mouseout", function() {
    TombolLogin.textContent = "Login";
    TombolLogin.classList.remove("hover-red");
});
