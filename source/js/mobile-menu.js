'use strict';

{
  //open-close mobile menu

  const body = document.querySelector('.body');
  const header = body.querySelector('.main-header');
  const mainHeader = header.querySelector('.main-header__wrapper');
  const menuBtn = mainHeader.querySelector('.humburger');
  const mainNav = mainHeader.querySelector('.main-nav');
  const userLinks = body.querySelector('.main-header__user-links');

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
  const fixedHeaderClass = 'main-header--fixed';
  const animationClassIn = 'animation-in';
  const animationClassOut = 'animation-out';

  const scrollMenu = () => {
    window.addEventListener('scroll', () => {
      const isFixed = mainHeader.classList.contains(fixedClass) || header.classList.contains(fixedHeaderClass);
      const isClose = mainNav.classList.contains('main-nav--close');
      // const isInnerPage = header.classList.contains('main-header--inner-page');
      const pageWidth = body.scrollWidth;
      const isTablet = (pageWidth >= 768 && pageWidth < 1440);
      const isMobile = pageWidth < 768;
      const isDesktop = pageWidth >= 1440;
      const y = window.scrollY;

      if (isClose) {
        const addFixed = () => {
          if (isDesktop) {
            header.classList.add(fixedHeaderClass);
            mainHeader.classList.add(fixedClass);
            header.classList.remove(animationClassOut);
            header.classList.add(animationClassIn);
          } else {
            mainHeader.classList.add(fixedClass);
            mainHeader.classList.remove(animationClassOut);
            mainHeader.classList.add(animationClassIn);
            if (!isMobile) userLinks.classList.add(animationClassIn);
          }
        };
        const delFixed = () => {
          if (isDesktop) {
            header.classList.remove(animationClassIn);
            mainHeader.classList.remove(animationClassIn);
            userLinks.classList.remove(animationClassIn);
            header.classList.add(animationClassOut);
            setTimeout(() => {
              header.classList.remove(fixedHeaderClass);
              mainHeader.classList.remove(fixedClass);
              header.classList.remove(animationClassOut);
              userLinks.classList.remove(animationClassOut);
            }, 500);
          } else {
            mainHeader.classList.remove(animationClassIn);
            if (isTablet) userLinks.classList.remove(animationClassIn);
            mainHeader.classList.add(animationClassOut);
            if (isTablet) userLinks.classList.add(animationClassOut);
            setTimeout(() => {
              mainHeader.classList.remove(fixedClass);
              mainHeader.classList.remove(animationClassOut);
              userLinks.classList.remove(animationClassOut);
            }, 500);
          }
        };

        if (y > 70) addFixed();
        if (y < 30 && isFixed) delFixed();
      };
    });
  };

  // resize actions

  window.addEventListener('resize', () => {
    const bodyWidth = body.clientWidth;
    const isClose = mainNav.classList.contains('main-nav--close');
    const isFixed = mainHeader.classList.contains(fixedClass);
    const isDesktopFixed = header.classList.contains(fixedHeaderClass);

    if (bodyWidth >= 1440 && !isClose) {
      menuBtn.classList.remove('humburger--open');
      mainHeader.classList.remove('main-header__wrapper--white');
      mainNav.classList.add('main-nav--close');
      body.classList.remove('no-scroll');
    };

    if (bodyWidth < 1440 && isDesktopFixed) {
      header.classList.remove(fixedHeaderClass);
      header.classList.remove(animationClassIn);
    };

    if (bodyWidth >= 1440 && isFixed) {
      header.classList.add(fixedHeaderClass);
    };
  });

  scrollMenu();
  openMenu();
}
