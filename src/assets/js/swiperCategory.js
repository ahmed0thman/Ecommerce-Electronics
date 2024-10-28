var swiperCategories = new Swiper("#swiperCategories", {
  breakpoints:{
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    525: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    756: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 15,
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



