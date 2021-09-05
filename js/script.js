'use strict';

window.addEventListener('DOMContentLoaded', function () {

  let selectlangDefault = document.querySelector('.selectlang__default');
  let selectlangSelect = document.querySelector('.selectlang__select');
  let selectlangList = document.querySelectorAll('.selectlang__option-list');
  let selectlangDefaultList = document.querySelector('.selectlang__default-list');

  let navWrapper = document.querySelector('.nav__wrapper');
  let navMenuLink = document.querySelectorAll('.nav__menu-link');
  let navMenuArrow = document.querySelector('.nav__menu-arrow');

  let questionsAccordionContent = document.querySelectorAll('.questions__accordion-content');

  let prev = document.querySelector('.cook__top-arrows-prev');
  let next = document.querySelector('.cook__top-arrows-next');
  let sliderWrapp = document.querySelector('.slider__cards');
  let sliderCard = document.querySelectorAll('.slider__cards-item');
  let current = 0;
  let width;

  let buttonUp = document.querySelector('.buttonup');

  function select() {
    selectlangDefault.addEventListener('click', function (e) {
      e.preventDefault();
      selectlangDefault.classList.add('has-active');
      selectlangSelect.classList.toggle('has-active');
    });
    selectlangList.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let currentOptons = e.currentTarget.innerHTML;
        selectlangDefaultList.innerHTML = currentOptons;
        selectlangDefault.classList.remove('has-active');
        selectlangSelect.classList.remove('has-active');
      });
    });
  };
  select();

  function changeOptions(variable) {
    if (window.scrollY > 60) {
      variable.classList.add('has-active');
    } else if (window.scrollY < 60) {
      variable.classList.remove('has-active');
    };
  };

  window.addEventListener('scroll', function () {
    changeOptions(navWrapper);
  });

  window.addEventListener('scroll', function () {
    changeOptions(navMenuArrow);
  });


  function changeColorLink() {
    navMenuLink.forEach(function (link) {
      if (window.scrollY > 60) {
        link.classList.add('has-active');
      } else if (window.scrollY < 60) {
        link.classList.remove('has-active');
      };
    });
  };
  window.addEventListener('scroll', changeColorLink);

  function accordion() {
    questionsAccordionContent.forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        e.currentTarget.classList.toggle('has-active');
      });
    });
  };
  accordion();

  function slider() {
    function sliderWidth() {
      width = document.querySelector('.slider__cards-item').offsetWidth;
      sliderWrapp.style.width = `${width} * ${sliderCard.length}px`;

      sliderCard.forEach(function (item) {
        item.style.width = `${width}px`;
        item.style.height = 'auto';
      });
    };
    sliderWidth();

    window.addEventListener('resize', sliderWidth);

    next.addEventListener('click', function () {
      current++;
      if (current > sliderCard.length / 2) {
        current = 0;
      };
      transformSlide();
    });

    prev.addEventListener('click', function () {
      current--;
      if (current < 0) {
        current = sliderCard.length / 2;
      };
      transformSlide();
    });

    function transformSlide() {
      sliderWrapp.style.transform = 'translate(-' + current * width + 'px)';
    };
  };
  slider();

  function Up() {
    buttonUp.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  };
  Up();
});