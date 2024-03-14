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
    $(".box1").click(function(){
        $(".reward").css("display","block")
    })

    $(".btn13").click(function(){
        $(".reward").css("display","none")
    })
})


$(document).ready(function(){
  $("#icon3").click(function(){
    $(".search").toggleClass("on")
  })

  $("#icon4").click(function(){
    $(".serach").toggleClass("off")
  })
})


  new WOW().init();


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



  
$(function(){
  $(".accordian h3").click(function(e){
    $($(e.target).find('.fa.fa-plus').toggleClass('open'));
  $(".accordian ul ul").slideUp();
    if ($(this).next().is(":hidden")){
    $(this).next().slideDown();
    }
  });
});