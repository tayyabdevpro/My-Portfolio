const burgerBtn = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav ul li a');
burgerBtn.addEventListener('click', () => {
    mobileNav.classList.remove('closed-menu');
    mobileNav.classList.add('open-menu');
});
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open-menu');
    mobileNav.classList.add('closed-menu');
});
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open-menu');
        mobileNav.classList.add('closed-menu');
    });
});