document.addEventListener('DOMContentLoaded', function () {
  function openMenu() {
    const menuToggler = document.querySelector('.js-menu-btn');
    const mobileNavContainer = document.querySelector('.header-list');
    const mobileNavTools = document.querySelector('.header-tools');
    const mobileMain = document.querySelector('.main');
    const mobileFooter = document.querySelector('.footer');
    const mobileHeader = document.querySelector('.header');
    console.log(menuToggler);
    console.log(mobileNavContainer);
    console.log(mobileNavTools);
    console.log(mobileMain);
    console.log(mobileFooter);
    console.log(mobileHeader);

    menuToggler.addEventListener('click', function () {
      menuToggler.classList.toggle('header-icon-active');
      mobileNavContainer.classList.toggle('mobile-nav--active');
      mobileNavTools.classList.toggle('mobile-nav--active1');
      mobileMain.classList.toggle('main--hidden');
      mobileFooter.classList.toggle('footer--hidden');
      mobileHeader.classList.toggle('header--white');
    });


  };

  openMenu();
});

