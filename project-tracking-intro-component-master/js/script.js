const toggle = document.querySelector(".hamburger")
const navigationMenu = document.querySelector("nav")
const closeIcon = document.querySelector(".closeIcon")

toggle.addEventListener("click", () => {
   navigationMenu.classList.toggle("showMenu")
   toggle.childNodes[1].classList.toggle("changeIcon")
   closeIcon.classList.toggle("showMenu")
})