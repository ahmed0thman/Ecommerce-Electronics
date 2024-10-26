var swiperCategories = new Swiper("#swiperCategories", {
  breakpoints:{
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    525: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    776: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function swiperCategoriesNext(){
  swiperCategories.slideNext();
}

function swiperCategoriesPrev(){
  swiperCategories.slidePrev();
}



