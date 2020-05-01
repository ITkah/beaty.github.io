$(document).ready(function() {
    $(".call-menu").on("click", function(){
      $("nav").slideUp(100);
      $(".header-top-wrap").addClass("header-top-wrap-active");
    });

    $(".call-lk").on("click", function(){
      $(".lk-hide").toggle();
    });

    $(".checkbox").on("click", function(){
      $(".postman").removeClass("postman-active");
    });

    $(".call-postman").on("click", function(){
      $(".postman").addClass("postman-active");
    });

    $(".star-disabled").on("click", function(){
      $(".star-disabled").removeClass("star-active");
      $(this).toggleClass("star-active");
    });

    $(".call-mes").on("click", function(){
      $(".mes").toggle();
    });

    $(".close").on("click", function(){
      $(".header-top-wrap").removeClass("header-top-wrap-active");
    });

    $(".call-catalog").on("click", function(){
      $("nav").slideToggle(200);
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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

      $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
    
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
          beforeOpen: function() {
            if($(window).width() < 700) {
              this.st.focus = false;
            } else {
              this.st.focus = '#name';
            }
          }
        }
      });
});