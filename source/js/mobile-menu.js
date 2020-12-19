'use strict';

{
  //open-close mobile menu

  const body = document.querySelector('.body');
  const mainHeader = body.querySelector('.main-header__wrapper');
  const menuBtn = mainHeader.querySelector('.humburger');
  const mainNav = mainHeader.querySelector('.main-nav');

  menuBtn.classList.remove('humburger--open');
  mainHeader.classList.remove('main-header__wrapper--white');
  mainNav.classList.add('main-nav--close');

  const openMenu = () => {
    menuBtn.addEventListener('click', () => {
      const isFixed = mainHeader.classList.contains('main-header__wrapper--fixed');

      menuBtn.classList.toggle('humburger--open');
      mainHeader.classList.toggle('main-header__wrapper--white');
      mainNav.classList.toggle('main-nav--close');
      if (isFixed) body.classList.toggle('no-scroll');
    });
  };

  //fixed menu on scroll

  const fixedClass = 'main-header__wrapper--fixed';
  const animationClassIn = 'animation-in';
  const animationClassOut = 'animation-out';

  const scrollMenu = () => {
    window.addEventListener('scroll', () => {
      const isFixed = mainHeader.classList.contains('main-header__wrapper--fixed');
      const isClose = mainNav.classList.contains('main-nav--close');
      const y = window.scrollY;

      if (isClose) {
        const addFixed = () => {
          mainHeader.classList.add(fixedClass);
          mainHeader.classList.remove(animationClassOut);
          mainHeader.classList.add(animationClassIn);
        };
        const delFixed = () => {
          mainHeader.classList.remove(animationClassIn);
          mainHeader.classList.add(animationClassOut);
          setTimeout(() => {
            mainHeader.classList.remove(fixedClass);
            mainHeader.classList.remove(animationClassOut);
          }, 500);
        };

        if (y > 70) addFixed();
        if (y < 30 && isFixed) delFixed();
      };
    });
  };

  scrollMenu();
  openMenu();
}
