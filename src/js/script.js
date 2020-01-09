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

