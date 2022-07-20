const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.menu-button');
const navbar = document.querySelector('.navbar-header');



const modal = ()=>{

 
      menu.classList.toggle('show');

   if ($(window).scrollTop() < 300) {
      navbar.classList.toggle('fixed');
    }
   btn.classList.toggle('line_active');

}

menu.addEventListener('click', event => {
   const target = event.target
   if(!target.closest('.menu')){
      modal();
   }
});
btn.addEventListener('click', modal);
