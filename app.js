let showHideMenu = ''

showHideMenu = () => {
  const mobileMenu = document.getElementById('menu-mobile');
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  } else {
    mobileMenu.classList.add('active');
  }
};

