$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
          "<i class='fa-solid fa-chevron-left'></i>",
          "<i class='fa-solid fa-chevron-right'></i>"
        ],
        // navContainer: '.product-slider .custom-nav',
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })
});