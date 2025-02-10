const btnReset = document.querySelector(".btn-reset")
const navbar = document.querySelector("nav")
const itemsNavbar = document.querySelectorAll("#item li")

// DOM Landing page
const headerHero = document.querySelector(".hero h1");
const imgHero = document.querySelector(".hero img")
const shapeHero = document.querySelector(".hero .shape-hero")

// DOM About
const sectAbout = document.querySelector("#about");
const headerAbout = document.querySelector("#about .about-right h3")
const textAbout = document.querySelector("#about .about-right p")
const btnAbout = document.querySelector("#about .about-right a");
const imagesAbout = document.querySelectorAll("#about .part img")
const shapeAbout = document.querySelector("#about .shape-about")

// Dom Inside
const sectInside = document.querySelector("#inside")

document.addEventListener("DOMContentLoaded", () => {
    const gapY = window.scrollY
    if (gapY >= -90 && gapY <= 467) {
        itemsNavbar[0].classList.add("active")
        itemsNavbar[1].classList.remove("active")
        itemsNavbar[2].classList.remove("active")
    } else if (gapY >= 468 && gapY <= 1233) {
        itemsNavbar[0].classList.remove("active")
        itemsNavbar[1].classList.add("active")
        itemsNavbar[2].classList.remove("active")
    } else if (gapY >= 1234) {
        itemsNavbar[0].classList.remove("active")
        itemsNavbar[1].classList.remove("active")
        itemsNavbar[2].classList.add("active")
    }
})

// Melakukan sebuah aksi ketika Btn Reset di klik
btnReset.addEventListener("click", handleReset)

// Melakukan sebuah aksi ketika halaman di scroll
window.addEventListener("scroll", handleScroll)

itemsNavbar.forEach(e => {
    e.addEventListener("click", handleNavbar)
})

// Fungsi untuk handle navbar ketika di klik 
function handleNavbar(e) {
    e.preventDefault();

    e.currentTarget.classList.remove("active");

    const hrefAttribute = this.querySelector("a").getAttribute("href");
    const container = document.querySelector(hrefAttribute);
    const gapFromTop = container.getBoundingClientRect().top + window.scrollY - 100;
    setTimeout(() => {
        window.scrollTo({ behavior: "auto", top: gapFromTop })
    }, 100);
}

// Fungsi untuk menghandle aksi scroll
function handleScroll() {
    const gapY = window.scrollY

    // On/Off animation hero
    if (gapY < 150) {
        headerHero.classList.remove("hide")
        imgHero.classList.remove("hide")
        shapeHero.classList.remove("hide")
    } else {
        headerHero.classList.add("hide")
        imgHero.classList.add("hide")
        shapeHero.classList.add("hide")
    }

    // On/Off button reset
    if (gapY > 120) {
        btnReset.classList.add("show")
        navbar.classList.add("floating")
    } else {
        btnReset.classList.remove("show")
        navbar.classList.remove("floating")
    }

    // On off animation about
    if (gapY > 580) {
        headerAbout.classList.add("show")
        textAbout.classList.add("show")
        btnAbout.classList.add("show")
        imagesAbout.forEach((_, i) => {
            setTimeout(() => {
                imagesAbout[i].classList.add("show")
            }, 100 * i);
        })
        shapeAbout.classList.add("show")
    } else {
        headerAbout.classList.remove("show")
        textAbout.classList.remove("show")
        btnAbout.classList.remove("show")
        shapeAbout.classList.remove("show")
        imagesAbout.forEach((_, i) => {
            setTimeout(() => {
                imagesAbout[i].classList.remove("show")
            }, 100 * i);
        })
    }

    // Active and Nonaktif navbar
    console.log(gapY)
    if (gapY >= -90 && gapY <= 467) {
        setTimeout(() => {
            itemsNavbar[0].classList.add("active")
            itemsNavbar[1].classList.remove("active")
            itemsNavbar[2].classList.remove("active")
        }, 200);
    } else if (gapY >= 468 && gapY <= 1233) {
        setTimeout(() => {
            itemsNavbar[0].classList.remove("active")
            itemsNavbar[1].classList.add("active")
            itemsNavbar[2].classList.remove("active")
        }, 200);
    } else if (gapY >= 1234) {
        setTimeout(() => {
            itemsNavbar[0].classList.remove("active")
            itemsNavbar[1].classList.remove("active")
            itemsNavbar[2].classList.add("active")
        }, 200);
    }
    // if (gapY - 120 < 773) {
    //     console.log("ok")
    // } else if (gapY - 120 < 1663) {
    //     console.log("cihuyt")
    // } else if (gapY - 120 > 1663) {
    //     console.log("mantap")
    // }
}

// Fungsi untuk menghandle tombol reset
function handleReset() {
    window.scrollTo({ top: "0", behavior: "smooth" })
}