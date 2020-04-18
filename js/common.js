$(document).ready(function() {
    $(".call-menu").on("click", function(){
      $("nav").slideUp(100);
      $(".header-top-wrap").addClass("header-top-wrap-active");
    });

    $(".close").on("click", function(){
      $(".header-top-wrap").removeClass("header-top-wrap-active");
    });

    $(".call-catalog").on("click", function(){
      $("nav").slideToggle(200);
    });

    $('.home-slider-call').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              arrows: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              dots: true,
            }
          }
        ]
      });
});