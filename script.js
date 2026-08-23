console.log('JS is working');

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
console.log(headerHeight);
document.body.style.setProperty('--header-height', headerHeight + 'px');

const burger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  console.log('🍔');
  navLinks.classList.toggle('active');
  burger.classList.toggle('abracadabra');
  document.body.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (event) => {
   navLinks.classList.remove('active');
   burger.classList.remove('abracadabra');
   document.body.classList.remove('menu-open');
 });
});

const sections = document.querySelectorAll('section')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  });
});
sections.forEach(section => {
  observer.observe(section);
  });
