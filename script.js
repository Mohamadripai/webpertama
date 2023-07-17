const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const submit = document.querySelector("#submit");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})