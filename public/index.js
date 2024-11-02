

//#region Swiper for Categories Section
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
//#endregion

//#region Handle all swiper in filtered products section
// const filterdProductsSection = document.getElementById("filterdProducts");
// let swipersDict ={}
// if(filterdProductsSection){
//   const swipers = filterdProductsSection.querySelectorAll(".swiper");
//   if(swipers.length){
    
//     let index = 1;
//     for (const swiper of swipers) {

//       swiper.setAttribute("id", `swiper_${index}`)
      
//       var tempSwiper = new Swiper(`#swiper_${index}`, {
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: true,
//         },
//         breakpoints:{
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 55,
//           },
//           410: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           765: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           870: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1250: {
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//           1600: {
//             slidesPerView: 5,
//             spaceBetween: 10,
//           },
//           2000: {
//             slidesPerView: 6,
//             spaceBetween: 10,
//           },
          
          
//         },
//         navigation: {
//           nextEl: ".swiper-button-prev",
//           prevEl: ".swiper-button-next",
//         }
//       });

//       swipersDict[`swiper_${index}`] = swiper
//       index = index + 1;
//     }
//   }
// }
//#endregion

//#region Swiper For Products With discount Section
var discountProductSwiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
    410: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    765: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    870: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    2000: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    
    
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  }
});
//#endregion