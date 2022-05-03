const hambtn = document.querySelector("#hamburger")

const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade");

hambtn.addEventListener("click", () => {
    console.log("btnHamburger clicked");

    if(header.classList.contains("open")) { //Close Menu
        body.classList.remove('noscroll');
        header.classList.remove("open");
        fadeElms.forEach(element => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
    }
    else { //Open Menu
        body.classList.add('noscroll');
        header.classList.add("open");
        fadeElms.forEach(element => {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        })
    }
});
