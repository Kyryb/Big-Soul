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
  keyboard: true,
  loop: true,
  longSwipes: false,
  followFinger: false,
  effect: 'slide',
  preventInteractionOnTransition: true,
})

const changesSwiper = new Swiper('.changes__swiper', {
  
})
console.log(heroSwiper);