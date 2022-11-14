const showHideMenu = (currentBtn) => {
  const mobileMenu = document.getElementById('menu-mobile')
  if (currentBtn.id === 'toggle-btn') {
    mobileMenu.classList.add('active')
  } else {
    mobileMenu.classList.remove('active')
  }
  // const nextBtn = document.getElementById(nextBtnId)
  // currentBtn.classList.remove('active')
  // nextBtn.classList.add('active')
}


