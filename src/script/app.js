import Swiper  from 'swiper';

let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});


document.querySelector('.questions__btn').addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('questions__btn--active');
  this.closest('.questions').classList.toggle('questions--active');
});


let jsModalLogin = document.querySelectorAll('.js-modal-login');
  
function modalShow(elem) {
  document.getElementById(elem).classList.add('modal--active');
  document.querySelector('.overlay-background').classList.add('overlay-background--active');
  document.querySelector('body').style.overflow = 'hidden';
}

if(jsModalLogin) {
  for (let i = 0; i < jsModalLogin.length; i++) {
    const elem = jsModalLogin[i];
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      modalShow(elem.getAttribute('data-modal'));
    });
    
  }
}

let modalCloseButton = document.querySelectorAll('.close-modal');
modalCloseButton.forEach((button) => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    let parent = this.closest('.modal');
    parent.classList.remove('modal--active');
    document.querySelector('.overlay-background').classList.remove('overlay-background--active');
    document.querySelector('body').style.overflow = '';
  });
});

window.addEventListener('click', (e) => {
  let el = document.querySelectorAll('.modal');
  el.forEach((elem) => {
    if (e.target == elem) {
      document.querySelectorAll('.modal').forEach((modal) => {
        modal.classList.remove('modal--active');
      });
      document.querySelector('.overlay-background').classList.remove('overlay-background--active');
      document.querySelector('body').style.overflow = '';
    } 
  });
});
  
document.addEventListener('keydown', (e) => {
  if(e.keyCode === 27) {
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.classList.remove('modal--active');
    });
    document.querySelector('.overlay-background').classList.remove('overlay-background--active');
    document.querySelector('body').style.overflow = '';
  }
});