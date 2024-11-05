var productThumbnailsSwiper = new Swiper("#productThumbnails", {
  // loop: true,
  breakpoints:{
    0: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    460: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    
    
  },
  freeMode: true,
  watchSlidesProgress: true,

});
var productImagesSwiper = new Swiper("#productImages", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 10,
  slidesPerView: 1,
  slidesPerView:1,
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  thumbs: {
    swiper: productThumbnailsSwiper,
  },
});

//#region Handle Product Details expand/collapse state
const btnShowDetailsElement = document.getElementById("btnShowDetails");
const productDetails = document.getElementById("productDetails")

if(btnShowDetailsElement && productDetails){
  btnShowDetailsElement.addEventListener('click',e =>{
    const btnTitleElement = btnShowDetailsElement.lastElementChild
    if(productDetails.classList.contains("expand")){
      productDetails.classList.remove("expand")
      btnTitleElement.textContent = "عرض المزيد"
    }
    else{
      productDetails.classList.add("expand")
      btnTitleElement.textContent = "عرض اقل"
    }
  })
}
//#endregion


//#region Related Products Swiper
var relatedProductSwiper = new Swiper("#relatedProductSwiper", {
  breakpoints:{
    0: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
    370: {
      slidesPerView: 2,
      spaceBetween: 2,
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
      spaceBetween: 30,
    },
    
    
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  }
});
//#endregion



