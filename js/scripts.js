$().ready(function () {
  $().ready(function(){
    $('.slick__block').slick({
      prevArrow: $('.slick__prewarrow'),
      nextArrow: $('.slick__nextarrow'),
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      dots: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            dots: true,
            centerPadding: '50px',
            centerMode: true,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            dots: true,
            centerPadding: '0px',
            centerMode: true,
            infinite: true,
          }
        }
      ]
    });
  });
  
  });