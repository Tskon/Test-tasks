'use strict';

/**
 * @param {string} selector - css selector from slider wrapper
 * @param {object} options - {colors:{background:'#fff', text:'#000'}, opacity: 0.8}
 * @constructor
 * @author TsKon
 */

function Slider(selector = 'body', slidesArr = [],
                options = {colors: {background: '#fff', text: '#000', imgDir: './img'}, opacity: 0.8}) {

  let currentSlide = 1;

  const render = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'tskon-slider';

    const html = `
        <div class="tskon-slider__content-row">
          <span class="tskon-slider__left-array"></span>
          <div class="tskon-slider__content"></div>
          <span class="tskon-slider__right-array"></span>
        </div>
        <div class="tskon-slider__controls"></div>
    `;

    wrapper.innerHTML = html;
    selector = document.querySelector(selector);
    selector.appendChild(wrapper);

    document.querySelector('.tskon-slider__right-array').addEventListener('click', () => {
      nextSlide()
    });

    document.querySelector('.tskon-slider__left-array').addEventListener('click', () => {
      prevSlide()
    });

    wrapper.cssText = `
      background-color = ${options.colors.background};
      color = ${options.colors.text};
    `;
  };

  const getSlide = (num = 1) => {
    num = (isNum(num)) ? num - 1 : 0;
    const slideWrap = document.querySelector('.tskon-slider__content');
    slideWrap.innerHTML = `<img src=${slidesArr[num]}/>`
  };

  const nextSlide = () => {
    getSlide(++currentSlide);
  };

  const prevSlide = () => {
    getSlide(--currentSlide);
  };

  function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

  render();
  getSlide();
}
