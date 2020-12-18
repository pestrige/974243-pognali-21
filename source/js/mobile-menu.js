"use strict";

{
  const mainHeader = document.querySelector('.main-header');
  const menuBtn = mainHeader.querySelector('.humburger');
  const mainNav = mainHeader.querySelector('.main-nav');

  menuBtn.classList.remove('humburger--open');
  mainHeader.classList.remove('main-header--white');
  mainNav.classList.add('main-nav--close');

  const openMenu = () => {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('humburger--open');
      mainHeader.classList.toggle('main-header--white');
      mainNav.classList.toggle('main-nav--close');
    });
  };

  openMenu();
}
