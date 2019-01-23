var popup = document.querySelector(".modal-contact-form");
var link = document.querySelector(".navigation-link-login");
var popupClose = popup.querySelector(".popup-close");
var overlay = document.querySelector(".modal-overlay");
var yourName = popup.querySelector("[type=text]:first-of-type");
var yourEmail = popup.querySelector("[type=email]");
var yourMessage = popup.querySelector("textarea");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
    yourName.focus();
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function (evt) {
    if (!yourName.value || !yourEmail.value || !yourMessage.value) {
        evt.preventDefault();
        console.log('Введите что-то');
    }
});

