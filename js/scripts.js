document.addEventListener('DOMContentLoaded', function () {
  function openMenu() {
    const menuToggler = document.querySelector('.js-menu-btn');
    const mobileNavContainer = document.querySelector('.header-list');
    console.log(menuToggler);
    console.log(mobileNavContainer);

    menuToggler.addEventListener('click', function () {
      menuToggler.classList.toggle('header-icon-active');
      mobileNavContainer.classList.toggle('mobile-nav--active');
    });


  };

  openMenu();
});

