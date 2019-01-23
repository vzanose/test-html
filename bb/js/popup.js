var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var overlay = document.querySelector(".modal-overlay");
var modalClose = document.querySelector(".modal-close");
var form = popup.querySelector(".login-form");
var login = popup.querySelector(".login-icon-user");
var password = popup.querySelector(".login-icon-password");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
    login.focus();
    if (storage) {
    login.value = storage;
    }
});

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    console.log('Надо ввести пароль');
    } else {
    local.Storage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-overlay-show");
    } 
    }
});
