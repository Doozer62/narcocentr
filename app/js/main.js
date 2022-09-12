
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









  //   if ($('.swiper-container').length > 0) { //some-slider-wrap-in
  //     let swiperInstances = [];
  //     $(".swiper-container").each(function(index, element){ //some-slider-wrap-in
  //         const $this = $(this);
  //         $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
  //         $this.parent().find(".swiper-pagination").addClass("pagination-" + index);
  //         $this.parent().find(".swiper-button-prev").addClass("prev-" + index); //prev must be unique (ex: some-slider-prev)
  //         $this.parent().find(".swiper-button-next").addClass("next-" + index); //next must be unique (ex: some-slider-next)
  //         swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)
  //             // your settings ...
  //             navigation: {
  //                 prevEl: ".prev-" + index,  //prev must be unique (ex: some-slider-prev)
  //                 nextEl: ".next-" + index, //next must be unique (ex: some-slider-next)
  //             },
  //             pagination: {
  //                 el: '.pagination-' + index,
  //                 type: 'bullets',
  //                 clickable: true
  //             },

  //         });
  //     });
  
  //     // Now you can call the update on a specific instance in the "swiperInstances" object
  //     // e.g.
  //     swiperInstances[3].update();
  //     //or all of them
  //     setTimeout(function () {
  //         for (const slider of swiperInstances) {
  //             slider.update();
  //         }
  //     }, 50);
  // }