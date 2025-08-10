/* ===== MENU SHOW & HIDE ===== */
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navLinks = document.querySelectorAll(".nav__link");

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
}

/* ===== REMOVE MENU ON MOBILE AFTER CLICK ===== */
navLinks.forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
}));

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]")
                    .classList.add("active-link");
        }else{
            document.querySelector(".nav__menu a[href*=" + sectionId + "]")
                    .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1000,
    reset: true
});

sr.reveal(`.home__data, .home__img, 
           .about__img, .about__subtitle, .about__text, 
           .skills__subtitle, .skills__text, .skills__data, .skills__img, 
           .work__img, 
           .contact__input, .contact__button`, {
    interval: 200
});
