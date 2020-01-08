document.addEventListener('DOMContentLoaded', function () {
  function openMenu() {
    const menuToggler = document.querySelector('.js-menu-btn');
    const mobileNavContainer = document.querySelector('.js-navigation');
    console.log(menuToggler);
    console.log(mobileNavContainer);

    menuToggler.addEventListener('click', function () {
      menuToggler.classList.toggle('header-icon-isActive');
      mobileNavContainer.classList.toggle('mobile-nav-isActive');
    });
  };
  openMenu();
});

