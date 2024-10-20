const openButton = document.getElementById("open-nav")
const closeButton = document.getElementById("close-nav")
const nav = document.querySelector(".navigation")
const allLinks = document.querySelectorAll(".ancora")

const openNav = () => {
    nav.style.width = "330px"
}

const closeNav = () => {
    nav.style.width = "0px"
}

const closeNavAncora = () => {
    if (window.innerWidth <= 768) {
        nav.style.width = "0px"
    }
}


openButton.addEventListener("click", openNav)
closeButton.addEventListener("click", closeNav)

allLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeNavAncora();
    });
});


/* Carrosel */


const nextButton = document.getElementById("nextslide")
const slideActive = document.querySelector(".active")

const moverSlide = () => {
    slideActive.style.marginLeft = "-426px"
}

nextButton.addEventListener("click", moverSlide)