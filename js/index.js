// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(window.screenTop)
// })
const btnReset = document.querySelector(".btn-reset")
const navbar = document.querySelector("nav")

btnReset.addEventListener("click", handleReset)

window.addEventListener("scroll", handleScroll)

function handleScroll() {
    const gapY = window.scrollY
    console.log(gapY)
    if (gapY > 120) {
        btnReset.classList.add("show")
        navbar.classList.add("floating")
    } else {
        btnReset.classList.remove("show")
        navbar.classList.remove("floating")
    }
}

function handleReset() {
    window.scrollTo({ top: "0", behavior: "smooth" })
}