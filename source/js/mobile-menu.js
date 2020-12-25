'use strict';

{
  //open-close mobile menu

  const body = document.querySelector('.body');
  //const mainHeader = body.querySelector('.main-header__wrapper');
  const mainHeader = body.querySelector('.main-header__inner');
  const menuBtn = mainHeader.querySelector('.humburger');
  const mainNav = mainHeader.querySelector('.main-nav');
  const userLinks = body.querySelector('.main-header__user-links');

  menuBtn.classList.remove('humburger--open');
  mainHeader.classList.remove('main-header__inner--white');
  mainNav.classList.add('main-nav--close');

  const openMenu = () => {
    menuBtn.addEventListener('click', () => {
      const isFixed = mainHeader.classList.contains('main-header__inner--fixed');

      menuBtn.classList.toggle('humburger--open');
      mainHeader.classList.toggle('main-header__inner--white');
      mainNav.classList.toggle('main-nav--close');
      if (isFixed) body.classList.toggle('no-scroll');
    });
  };

  //fixed menu on scroll

  const fixedClass = 'main-header__inner--fixed';
  const animationClassIn = 'animation-in';
  const animationClassOut = 'animation-out';

  const scrollMenu = () => {
    window.addEventListener('scroll', () => {
      const isFixed = mainHeader.classList.contains('main-header__inner--fixed');
      const isClose = mainNav.classList.contains('main-nav--close');
      const pageWidth = document.documentElement.scrollWidth;
      const isTablet = pageWidth >= 768;
      const y = window.scrollY;

      if (isClose) {
        const addFixed = () => {
          mainHeader.classList.add(fixedClass);
          mainHeader.classList.remove(animationClassOut);
          mainHeader.classList.add(animationClassIn);
          //userLinks.classList.add(animationClassIn);
        };
        const delFixed = () => {
          mainHeader.classList.remove(animationClassIn);
          if (isTablet) userLinks.classList.remove(animationClassIn);
          mainHeader.classList.add(animationClassOut);
          if (isTablet) userLinks.classList.add(animationClassOut);
          setTimeout(() => {
            mainHeader.classList.remove(fixedClass);
            mainHeader.classList.remove(animationClassOut);
            //userLinks.classList.remove(animationClassOut);
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
