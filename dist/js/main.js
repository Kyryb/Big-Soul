import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

console.log("Hello world");
const heroSwiper = new Swiper('.hero__swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 300,
  spaceBetween: 0,
  keyboard: true,
  loop: true,
  longSwipes: false,
  // followFinger: false,
  effect: 'slide',
  preventInteractionOnTransition: true,
})

const changesSwiper = new Swiper('.changes__swiper', {
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    type: 'bullets',
    el: '.swiper-pagination',
    bulletClass: 'custom-bullet',
    bulletActiveClass: 'custom-bullet--active',
    clickable: true,
  },
  navigation: {
    nextEl: '.custom-nav-button--next',
    prevEl: '.custom-nav-button--prev',
    disabledClass: 'custom-nav-button--disabled',
    hiddenClass: 'cuton-nav-shit',
  },
  speed: 500,
  keyboard: true,
  longSwipes: false,
})

changesSwiper.on('transitionStart', function() {
  let changesNav = document.querySelector('.changes__swiper-nav');

  changesNav.classList.add('changes__swiper-nav--hidden');
})


changesSwiper.on('transitionEnd', function() {
  let changesNav = document.querySelector('.changes__swiper-nav');
  
  changesNav.classList.remove('changes__swiper-nav--hidden');
})

changesSwiper.on('touchMove', function() {
  let changesNav = document.querySelector('.changes__swiper-nav');

  changesNav.classList.add('changes__swiper-nav--hidden');
})

changesSwiper.on('touchEnd', function() {
  let changesNav = document.querySelector('.changes__swiper-nav');

  changesNav.classList.remove('changes__swiper-nav--hidden');
})

const reviews= new Swiper('.reviews__swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.custom-nav-button--next',
    prevEl: '.custom-nav-button--prev',
    disabledClass: 'custom-nav-button--disabled',
    hiddenClass: 'cuton-nav-shit',
  },
  speed: 500,
  keyboard: true,
  longSwipes: true,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },

    375: {
      slidesPerView: 1,
      spaceBetween: 24,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 42,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
})

const breakpoint = window.matchMedia( '(min-width:1024px)' );
let retreatPlanSwiper;

const breakpointChecker = function() {
   if ( breakpoint.matches === true ) {
      if ( retreatPlanSwiper !== undefined ) {
        retreatPlanSwiper.destroy( true, true )
      };
      return;
   } else if ( breakpoint.matches === false ) {
      return enableSwiper();
   }
};

const enableSwiper = function() {
    retreatPlanSwiper= new Swiper ('.retreat-plan__swiper', {
      keyboard: true,
      // longSwipes: true,
      slidesPerView: 1.1,
      spaceBetween: 16,
      direction: 'horizontal',
      speed: 300,
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      }
   });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

let cardSelectors = document.getElementsByClassName("retreat-plan__card-selector");

for (let cardSelector of cardSelectors) {
  cardSelector.addEventListener("click", () => {
    let selectorArray = [...cardSelectors];
    let cardsArray = [...document.getElementsByClassName("retreat-plan__card")];
    let selectorIndex = selectorArray.indexOf(cardSelector);
    
    if (selectorIndex > cardsArray.length - 1) {
      return;
    }
    selectorArray.forEach(function(element) {
      if(element.classList.contains('retreat-plan__card-selector--active')) {
        let elementIndex = selectorArray.indexOf(element);
        element.classList.remove('retreat-plan__card-selector--active');
        cardsArray.at(elementIndex).classList.remove('retreat-plan__card--active');
      }
    })

    cardSelector.classList.add('retreat-plan__card-selector--active');
    cardsArray.at(selectorIndex).classList.add('retreat-plan__card--active');
  })
}
