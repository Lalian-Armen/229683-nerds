/**
 * Created by VDVD on 14.02.2017.
 */
var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".modal-content");
var close= document.querySelector(".modal-close-element");
link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});
close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show")
});
