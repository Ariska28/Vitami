document.addEventListener('DOMContentLoaded', function () {
  function openMenu() {
    const menuToggler = document.querySelector('.js-menu-btn');
    const mobileNavContainer = document.querySelector('.js-navigation');

    menuToggler.addEventListener('click', function () {
      menuToggler.classList.toggle('header-icon-isActive');
      mobileNavContainer.classList.toggle('mobile-nav-isActive');
    });
  };
  openMenu();

  var section = $('li');
  function toggleAccordion() {
    section.removeClass('isActive');
    $(this).addClass('isActive');
  }
  
  section.on('click', toggleAccordion);
});


$().ready(function () {
  $().ready(function () {
      $('.blocks').slick({
          centerMode: true,
          centerPadding: '0px',
          prevArrow: $('.blocks__prewarrow'),
          nextArrow: $('.blocks__nextarrow'),
          slidesToShow: 3                                                                             ,
          dots: true,
          infinite:false,
          responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      slidesToShow: 2,
                      dots: true,
                      centerPadding: '0px',
                      centerMode: true,
                      infinite: true,
                  }
              },
              {
                  breakpoint: 900,
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

