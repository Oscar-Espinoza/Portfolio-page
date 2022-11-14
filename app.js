document.querySelectorAll('.menu-btn').forEach((item) => {
  item.addEventListener('click', () => {
    const menu = document.getElementById('menu-mobile');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
});
