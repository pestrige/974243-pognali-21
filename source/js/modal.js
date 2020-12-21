'use strict';

{
  const body = document.querySelector('body');
  const modalOpenLink = document.querySelector('.pricing__business-link');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = modal.querySelector('.modal__btn');
  const modalWrapper = modal.querySelector('.modal__wrapper');

  const modalToggle = () => {
    modal.classList.toggle('modal--open');
    modalWrapper.classList.toggle('modal__wrapper--shift-in');
    body.classList.toggle('no-scroll');
  };

  modalOpenLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalToggle();
  });

  modalCloseBtn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    modalToggle();
  });

  body.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target == modal) modalToggle();
  });
}
