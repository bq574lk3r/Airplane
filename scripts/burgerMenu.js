export const showBurger = () => {
  const burger = document.getElementById('burger');
  const burgerMenu = document.getElementById('burger-menu');
  burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      burgerMenu.classList.toggle('active');
  });
};
