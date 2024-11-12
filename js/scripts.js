// *********************
//TABS
// *********************
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.tabs__content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active');
              })
            document.querySelectorAll('.tabs__item').forEach(function(tabContent) {
                tabContent.classList.remove('tabs__btn-active');
              })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
            document.querySelector(`[data-path="${path}"]`).classList.add('tabs__btn-active');
        })
    })

// **********************
// SWIPER
// **********************

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   dynamicBullets: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


/**
 * Accordion 
 */
$( function() {
  $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
  });
} );
})

/* burger */

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
});