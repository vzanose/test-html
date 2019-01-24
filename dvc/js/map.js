var mapPopup = document.querySelector(".modal-map");
var mapLink = document.querySelector(".map-btn");
var mapPopupClose = mapPopup.querySelector(".popup-close");
var overlay = document.querySelector(".modal-overlay");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
});

mapPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")){
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
      mapPopup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});



