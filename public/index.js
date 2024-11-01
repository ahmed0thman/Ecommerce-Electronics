function toggleNavBar(){
  const navbarContentElement = document.getElementById("navbarContent");
  
  if(navbarContentElement){
    const children = navbarContentElement.children;
    let totalHeight = 0;
    Array.from(children).forEach(element => {
      totalHeight += element.clientHeight;
    });
    
    if(navbarContentElement.classList.contains("expand")){
      navbarContentElement.classList.remove("expand")
      navbarContentElement.style.height = "0px"
    }
    else{
      navbarContentElement.classList.add("expand")
      navbarContentElement.style.height = `${totalHeight}px`
    }
  }
}

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

var discountProductSwiper = new Swiper("#discountProductSwiper", {
  // loop: true,
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
    1700: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    2000: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    
    
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  }
});