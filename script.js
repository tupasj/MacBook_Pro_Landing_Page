const appleIcon = document.querySelector('.main-nav__menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

appleIcon.addEventListener('click', () => {
    if (mobileMenu.style.display != 'block' ) {
        mobileMenu.style.display = 'block';
        body.classList.add('stop-scrolling');
      } else {
        mobileMenu.style.display = 'none';
        body.classList.remove('stop-scrolling');
      };
});