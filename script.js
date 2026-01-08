/* --- MENU ICON NAVBAR --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* --- DARK LIGHT MODE --- */
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/* --- SCROLL SECTIONS ACTIVE LINK & STICKY NAVBAR --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Select the link that matches the current section ID
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    /* --- STICKY NAVBAR --- */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* --- REMOVE MENU ICON ON SCROLL --- */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* --- SWIPER (Testimonials) --- */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    // Connects pagination dots
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // Arrows for manual navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive viewports
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 1,
            spaceBetween: 50
        }
    }
});
