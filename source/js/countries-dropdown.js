'use strict';

{
  const menu = document.querySelector('.filter__dropdown');
  const menuBtnClose = document.querySelector('.countries-catalog__close');
  const menuBtnToggle = document.querySelector('.filter__region-btn');
  const menuBtnToggleText = document.querySelector('.filter__region-btn-text');

  const isMenuOpen = () => menu.classList.contains('filter__dropdown--open');
  const closeMenu = () => {
    menu.classList.remove('filter__dropdown--open');
    menuBtnToggle.classList.remove('filter__region-btn--open');
  };
  const toggleMenu = () => {
    if (!isMenuOpen()) {
      menu.classList.add('filter__dropdown--open');
      menuBtnToggle.classList.add('filter__region-btn--open');
    } else closeMenu();
  };

  menuBtnToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleMenu();
  });

  menuBtnClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (isMenuOpen()) closeMenu();
  });
}
