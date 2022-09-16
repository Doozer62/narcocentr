
$(function(){
 
    $('.slider__inner').slick({
    
    });
    
    });


    const swiper = new Swiper('.swiper-container', {
        
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
          el: false,
        },

        
      });


      
      const swiper2 = new Swiper ('.swiper-container2',{
        loop: true,
        slidesPerView: 1,

        scrollbar: {
          el: false,
        },

        pagination: {
          el: '.swiper-pagination2',
        },
      
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
      });



      const swiper3 = new Swiper ('.swiper-container3',{
        loop: true,
        slidesPerView: 1,

        scrollbar: {
          el: false,
        },

        pagination: {
          el: '.swiper-pagination3',
        },
      
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },
      });

//       var swiper_list = $("[data-slider-id]");
// $(swiper_list).each(function() {
//     let swiper_slider_id = $(this).attr('data-slider-id');
//     var swiper = new Swiper(".swiper2", {
//         spaceBetween: 10,
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//     });
// });


var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('goTop');
  window.scrollY > 0 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}

function scrollTo(element) {
  window.scroll({
    left: 100,
    top: element.offsetTop,
    behavior: "smooth"
  })
}

var button = document.querySelector('.go-top');
var header = document.querySelector('#header');

button.addEventListener('click', () => {
  scrollTo(header);
})


var button = document.querySelector('#aboutLink');
var about = document.querySelector('#about');

button.addEventListener('click', () => {
  scrollTo(about);
})


var button = document.querySelector('#servicesLink');
var services = document.querySelector('#services');

button.addEventListener('click', () => {
  scrollTo(services);
})


var button = document.querySelector('#certificatesLink');
var certificates = document.querySelector('#certificates');

button.addEventListener('click', () => {
  scrollTo(certificates);
})

var button = document.querySelector('#sliderDoctors');
var doctors = document.querySelector('#slider');

button.addEventListener('click', () => {
  scrollTo(slider);
})

