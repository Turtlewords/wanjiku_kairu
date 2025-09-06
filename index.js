// Elements

const container = document.querySelector(".container")
const hamburgerOpen = document.querySelector(".header__hamburger")
const hamburgerClose = document.querySelector(".menu__close-btn")
const slideMenu = document.querySelector(".menu__container")
const slideInnerMenu = document.querySelector(".menu__inner-container")

const slideMenuLinks = document.querySelectorAll(".slide-menu__link")

// Event Listeners

hamburgerOpen.addEventListener("click", () => {
    hamburgerOpen.classList.add("invisible")
    slideMenu.classList.add("w-3/4")
    container.classList.add("opacity-50")
    
})

hamburgerClose.addEventListener("click", () => {
    hamburgerOpen.classList.remove("invisible")
    slideMenu.classList.remove("w-3/4")
    container.classList.remove("opacity-50")
})

slideMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
    slideMenu.classList.remove("w-3/4")
    hamburgerOpen.classList.remove("invisible")
    container.classList.remove("opacity-50")
    })
})

