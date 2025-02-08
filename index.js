const burgerBtn = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav ul li a');
const floatingButtonDiv = document.querySelector('.floating_button_div');
const botScreen = document.querySelector('.bot_screen');
const closeBot = document.querySelector('.close-bot');
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

floatingButtonDiv.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        window.location.href = 'https://tayyabdevpro.github.io/chatbot-system/';
    } else {
        botScreen.style.display = 'block';
        closeBot.addEventListener('click', (e) => {
            if (e.target !== floatingButtonDiv && e.target !== botScreen) {
                botScreen.style.display = 'none';
            }
        });
    }
})

