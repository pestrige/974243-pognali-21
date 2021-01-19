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
  const changeBtnText = () => {
    if (menuBtnToggle.classList.contains('filter__region-btn--open')) {
      menuBtnToggleText.textContent = 'Свернуть';
    } else menuBtnToggleText.textContent = 'Показать все';
  };

  menuBtnToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleMenu();
    changeBtnText();
  });

  menuBtnClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (isMenuOpen()) closeMenu();
  });
}
