const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const header = document.querySelector(".header__content");
const sections = document.querySelectorAll('section[id]')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener("scroll", () =>{
    if (window.scrollY >= 0 || window.pageYOffset >= 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__data',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon', { interval: 200}); 
sr.reveal('.skills__data, .prj, .serv, .hobbies, .priorities, .contact__input',{interval: 100}); 