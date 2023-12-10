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
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('header').addClass('sticky');
        }else{
            $('header').addClass('sticky');

        }
    });
});
// Lấy thẻ video
const video = document.getElementById('myVideo');

// Lắng nghe sự kiện khi video hoàn thành
video.addEventListener('ended', function() {
  // Reset video về thời điểm ban đầu và chạy lại
  video.currentTime = 0;
  video.play();
});
