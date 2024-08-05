function mobileNav() {
  const navBTN = document.querySelector('.header__bar');
  const navMenu = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav__link');

  let isMenuOpen = false;
  navMenu.style.display = 'none';
  document.body.style.overflowY = 'auto';

  navBTN.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    console.log(isMenuOpen);
    
    if (isMenuOpen) {
      navMenu.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      navMenu.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      navMenu.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
}

export default mobileNav;
