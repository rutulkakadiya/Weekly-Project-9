$(document).ready(function(){
    $("#icon1").click(function(){
        $(".block").css("display","block")
    })
})
$(document).ready(function(){
    $("#icon4").click(function(){
        $(".block").css("display","none")
    })
})

$(document).ready(function(){
  $("#a1").mouseenter(function(){
    $(".navbox1").css("display","block")
  })

  $(".navbox1").mouseleave(function(){
    $(".navbox1").css("display","none")
  })
})

$(document).ready(function(){
  $("#a3").mouseenter(function(){
    $(".navbox2").css("display","block")
  })

  $(".navbox2").mouseleave(function(){
    $(".navbox2").css("display","none")
  })
})


$(document).ready(function(){
  $("#icon7").click(function(){
    $(".search").toggleClass("on")
  })

  $("#icon8").click(function(){
    $(".serach").toggleClass("off")
  })
})

  new WOW().init();


'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function (box) {
            box.classList.add('hide');
            if (box.getAttribute('data-content') == id){
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});




$(window).scroll(function()
{
    $('header').toggleClass('background',$(this).scrollTop()>100);
});

var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  }); 

  var swiper = new Swiper(".mySwiper3", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper4", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {  
      '576': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '768': {
        slidesPerView: 2,
        spaceBetween: 50, },
      '992': {
        slidesPerView: 4,
        spaceBetween: 50, },
      '1300': {
        slidesPerView: 4,
        spaceBetween: 50, },    
    },
      // Optional parameters   
       freeMode: true,
      loop: false,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
  
  });

 
$(function(){
  $(".accordian h3").click(function(e){
    $($(e.target).find('.fa.fa-plus').toggleClass('open'));
  $(".accordian ul ul").slideUp();
    if ($(this).next().is(":hidden")){
    $(this).next().slideDown();
    }
  });
});