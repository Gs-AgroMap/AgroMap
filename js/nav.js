const toggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.navbar-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.classList.toggle('open');
});
