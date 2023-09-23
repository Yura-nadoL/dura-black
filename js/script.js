// header scroll ===============================================================================================================================================================================================================
window.addEventListener('scroll', function () {
   if (pageYOffset > 50) {
      document.querySelector('.header').classList.add('active')
   } else {
      document.querySelector('.header').classList.remove('active')
   }
})

// burger ===============================================================================================================================================================================================================
const burgerBtn = document.querySelector('.header__burger');
const innerEl = document.querySelector('.header__inner');
const overflow = document.querySelector('.header__overflow');
const menu = document.querySelector('.nav-header__list')
const bodyLock = document.body;

if (burgerBtn) {
   burgerBtn.addEventListener('click', () => {
      innerEl.classList.toggle('active');
      bodyLock.classList.toggle('lock');
      overflow.classList.toggle('active');
   })
   menu.querySelectorAll('.nav-header__link').forEach(link => {
      link.addEventListener('click', () => {
         innerEl.classList.remove('active');
         bodyLock.classList.remove('lock');
         overflow.classList.remove('active');
      })
   })
} 
if (overflow) {
   overflow.addEventListener('click', () => {
      innerEl.classList.remove('active');
      bodyLock.classList.remove('lock');
      overflow.classList.remove('active');
   })
}
   


// search ===============================================================================================================================================================================================================
const search = document.querySelector('.box-header__box');
const bodyElement = document.querySelector('body');

search.addEventListener('click', function (e) {
   e.stopPropagation();
   search.classList.add('active-search');
})
bodyElement.addEventListener('click', function () {
   search.classList.remove('active-search');
});
// pro =============================================================================================================================================================================================================== 
const swiper = new Swiper('.slider-box-pro__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   effect: 'cards',
   cardsEffect: {
      perSlideOffset: 50,
      perSlideRotate: 5,
      rotate: true,
      slideShadows: false,
   },
   autoplay: {
      delay: 3000,
   },
});

// panel ===============================================================================================================================================================================================================
const swiperGallerySmall = new Swiper('.gallery-small__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   slidesPerView: 7,
   slideToClickedSlide: true,
   watchSlidesVisibility: true,
});
const swiperGallery = new Swiper('.gallery-panel__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   spaceBetween: 10,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   thumbs: {
      swiper: swiperGallerySmall,
   },
});

// gallery ===============================================================================================================================================================================================================
let gallery = document.getElementById('lightgallery');
lightGallery(gallery, {
   selector: '.gallery-panel__image',
   licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
   speed: 500,
   controls: true, // стрелки prev / next
   counter: true, // номерация порядок картинок
   download: false, // скачивание картинок

   // plugins lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
   plugins: [lgThumbnail],
})

// swiper pick  ===============================================================================================================================================================================================================
const swiperPick = new Swiper('.slider-pick__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   effect: 'cards',
   cardsEffect: {
      perSlideOffset: 50,
      perSlideRotate: 5,
      rotate: true,
      slideShadows: false,
   },
   autoplay: {
      delay: 3000,
   },
});

// swiper reviews ===============================================================================================================================================================================================================
const swiperReviews = new Swiper('.sliders-reviews__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   slidesPerView: 4.3,
   spaceBetween: 15,
   breakpoints: {
      // when window width is >= 320px
      300: {
         slidesPerView: 1,
      },
      500: {
         slidesPerView: 2,
      },
      // when window width is >= 480px
      767: {
         slidesPerView: 3,
      },
      // when window width is >= 640px
      1000: {
         slidesPerView: 4.3,
      }
   },

   scrollbar: {
      el: '.swiper-scrollbar',
   },
});