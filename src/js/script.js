document.addEventListener('DOMContentLoaded', function () {
  function openMenu() {
    const menuToggler = document.querySelector('.js-menu-btn');
    const mobileNavContainer = document.querySelector('.header-navigation');
    const mobileNavTools = document.querySelector('.header-tools');
    console.log(menuToggler);
    console.log(mobileNavContainer);
    console.log(mobileNavTools);

    menuToggler.addEventListener('click', function () {
      menuToggler.classList.toggle('header-icon-active');
      mobileNavContainer.classList.toggle('mobile-nav--active');
      mobileNavTools.classList.toggle('mobile-nav--active1');
    });


  };

  openMenu();
});

