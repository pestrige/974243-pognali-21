"use strict";
{
  const mainHeader = document.querySelector('.main-header');
  const menuBtn = mainHeader.querySelector('.humburger');
  const mainNav = mainHeader.querySelector('.main-nav');

  const openMenu = () => {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('humburger--open');
      mainHeader.classList.toggle('main-header--scroll');
      mainNav.classList.toggle('main-nav--close');
    });
  };

  openMenu();
}
