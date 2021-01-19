'use strict';

{
  const formSearch = document.querySelector('.form-search');
  const listToggles = formSearch.querySelectorAll('.form-search__legend');
  const optionLists = formSearch.querySelectorAll('.form-search__options-list');
  const classTrigger = 'form-search__options-list--closed';
  const tabletWidth = '768';

  const isMobile = () => document.body.clientWidth < tabletWidth;
  const toggleList = (toggle, list) => {
    toggle.classList.toggle('form-search__legend--closed');

    let listHeight = list.clientHeight;
    if (listHeight > 0) {
      list.style.height = listHeight + 'px';
      setTimeout(() => {
        list.style.height = '0px';
      }, 0);
      list.classList.add(classTrigger);
    } else {
      list.classList.remove(classTrigger);
      list.style.height = 'auto';
      listHeight = list.clientHeight;
      list.style.height = '0px';
      setTimeout(() => {
        list.style.height = listHeight + 'px';
      }, 0);
    };
  };

  for (let listToggle of listToggles) {
    listToggle.addEventListener('click', (evt) => {
      if (isMobile()) {
        evt.preventDefault();
        const attribute = evt.target.getAttribute('data-name');
        const optionsList = formSearch.querySelector(`[data-list = ${attribute}]`);
        toggleList(listToggle, optionsList);
      };
    });
  };

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      for (let optionsList of optionLists) {
        optionsList.removeAttribute('style');
      };
    };
  });
}

// {
//   const formSearch = document.querySelector('.form-search');
//   const listButtons = formSearch.querySelectorAll('.form-search__btn-show-list');
//   //const optionsLists = document.querySelectorAll('.form-search__options-list');

//   const toggleList = (button, list) => {
//     button.classList.toggle('form-search__btn-show-list--closed');
//     list.classList.toggle('form-search__options-list--closed');
//   };

//   for (let listButton of listButtons) {
//     listButton.addEventListener('click', (evt) => {
//       evt.preventDefault();
//       const attribute = evt.target.getAttribute('data-button');
//       const optionsList = formSearch.querySelector(`[data-list = ${attribute}]`);
//       toggleList(listButton, optionsList);
//     });
//   };
// }
