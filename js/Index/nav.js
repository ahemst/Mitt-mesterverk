// Endrer farge til navbar

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 580) {
        headerEl.classList.add('header-scrolled');
    }
    else if ( window.scrollY < 580) {
        headerEl.classList.remove('header-scrolled');
    }
});

// Får navbar til å ikke dekke til lokallinker

const headerHeight = document.querySelector('.header').offsetHeight;
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});