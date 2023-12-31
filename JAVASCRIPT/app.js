$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    dotsSpeed: 1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

$('.loop').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  responsive:{
      600:{
          items:4
      }
  }
});
$('.nonloop').owlCarousel({
  center: true,
  items:2,
  loop:false,
  margin:10,
  responsive:{
      600:{
          items:4
      }
  }
});


