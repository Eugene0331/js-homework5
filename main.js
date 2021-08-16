/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */


let container = null;
let prevIndicator = null;

function createContainer () {
  el = document.createElement('div');

  el.setAttribute('id', 'carousel');
  el.setAttribute('class', 'carousel');

  document.querySelector('body').appendChild('elem');

  container = document.querySelector('#carousel');
};

function createSlides (n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');


  for (i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');

    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);
  }

  container.appendChild(slidesContainer);
};

function createIndicators (n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);

    indicatorsContainer.appendChild(indicatorsItem);
  };

  container.appendChild(indicatorsContainer);
};

function createControls () {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement('div');
    let controlIcons = document.createElement('i');

    const defaultItemClass = 'controls__item';
    const defaultIconClass = 'fas';

    switch (i) {
      case 0:
        controlItem.setAttribute ('class', `${defaultItemClass} controls__prev`);
        controlIcons.setAttribute ('class', `${defaultIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute ('class', `${defaultItemClass} controls__next`);
        controlIcons.setAttribute ('class', `${defaultIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute ('class', `${defaultItemClass} controls__pause`);
        controlIcons.setAttribute ('class', `${defaultIconClass} fa-play`);
        break;
    };

    controlItem.appendChild(controlIcons);
    controlsContainer.appendChild(controlItem);
  }

  container.appendChild(controlsContainer);
};

function createStyle () {
  styleContainer = document.createElement('style');

  let style = `
  .slides,
  .controls{
    position: relative;
  }
  .indicators{
    display: flex;
  }`;

  styleContainer.innerHTML = style;
  container.appendChild(styleContainer);
};

function handler (event) {
  let target = event.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIiousndicator.removeAttribute('style');

    prevIndicator = target;
  };
};

function setListener () {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', handler);
};



function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  crateSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();

};

createCarousel(4);
