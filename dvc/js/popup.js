var popup = document.querySelector(".modal-contact-form");
var link = document.querySelector(".navigation-link-login");
var popupClose = popup.querySelector(".popup-close");
var overlay = document.querySelector(".modal-overlay");
var yourName = popup.querySelector("[type=text]:first-of-type");
var yourEmail = popup.querySelector("[type=email]");
var yourMessage = popup.querySelector("textarea");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
// var storageName = localStorage.getItem("yourName");
// var storageEmail = localStorage.getItem("yourEmail");

try {
  storageName = localStorage.getItem("yourName"); 
} catch (err) {
  isStorageSupport = false;
}
try {
  storageEmail = localStorage.getItem("yourEmail"); 
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
  if (storageName && storageEmail) {
    yourName.value = storageName;
    yourEmail.value = storageEmail;
    yourMessage.focus();
  } else {
    yourName.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
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
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("yourEmail", yourEmail.value);
    }   
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});



