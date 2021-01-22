{
  'use strict';

  const inputs = document.querySelectorAll('.country-field__select');
  //const countryList = document.querySelector('.country-field__choose-country');
  //const closeListBtn = countryList.querySelector('.choose-country__close');
  const isListOpen = (list) => list.classList.contains('country-field__choose-country--open');
  const toggleList = (list) => {
    if (isListOpen(list)) {
      list.classList.remove('country-field__choose-country--open');
    } else {
      list.classList.add('country-field__choose-country--open');
    };
  };

  for (let input of inputs) {
    input.addEventListener('click', (evt) => {
      evt.preventDefault();
      const attr = input.getAttribute('data-input');
      const countryList = document.querySelector(`[data-list="${attr}"]`);
      const closeListBtn = countryList.querySelector('.choose-country__close');
      toggleList(countryList);

      closeListBtn.addEventListener('click', () => {
        if (isListOpen(countryList)) toggleList(countryList);
      });

      document.addEventListener('keydown', (evt) => {
        if (isListOpen(countryList) && evt.code == 'Escape') toggleList(countryList);
      });
    });
  };

}
