const toTheTopButton = document.querySelector(".arrow-to-top")
const hamMenu = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".menu")
const blackScreen = document.querySelector(".black-screen")

toTheTopButton.addEventListener(("click"), () => {
    window.scrollTo(0, 0)
})

hamMenu.addEventListener(("click"), () => {
    menu.classList.toggle("on")
    blackScreen.classList.toggle("on")
})

blackScreen.addEventListener(("click"), () => {
    menu.classList.toggle("on")
    blackScreen.classList.toggle("on")
})
