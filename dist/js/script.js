window.addEventListener('DOMContentLoaded', () => {
  /* Const*/
  const menuToggle = document.querySelector('#menuToggle'),
      menu = document.querySelector('.menu'),
      ham = document.querySelector('#hambanim'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      subtitle = document.querySelector('.promo__subtitle'),
      title = document.querySelector('.promo__title'),
      btns = document.querySelector('.promo__btns'),
      sidepanel = document.querySelector('.sidepanel');

/* Appearance effect */

setTimeout(function(){
  subtitle.style.opacity = 1;
  title.style.opacity = 1;
  btns.style.opacity = 1;
  sidepanel.style.opacity = 1;
  menuToggle.style.opacity = 1;

}, 200);

/* Menu */
     
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
  ham.checked = false;   
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  ham.checked = false;
});

/* Up button */

window.addEventListener('scroll',(event) => {
      let elem = document.querySelector('.pageup');
      let y = scrollY;
      if (y>500) { elem.style.display = 'block'}
      else { elem.style.display = 'none'};
      });

/* Confirmation of sending a message */

$(document).ready(function(){
  $('form').submit(function(e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        setTimeout(function() {
          $('.overlay, #thanks').fadeOut('slow');
        },2000);
        $('form').trigger('reset');
    });
    return false;
  });
});

/* Modal and Policy */

$('.contacts__policy-link').on('click', function(){
  $('.overlay, #privacy').fadeIn('slow');
  $("body").css("overflow-y", "hidden");
});

$('.modal__close').on('click', function(){
  $('.overlay, #thanks').fadeOut('slow');
  $("body").css("overflow-y", "visible");
});
$('.overlay').click( function (e) { 
  if ( e.target == this )
  {$('.overlay, #thanks').fadeOut('slow');
  $("body").css("overflow-y", "visible");}
});

// Scroll animation

$(document).ready(function(){
  $('[href^="#"]').on('click', function(event){
       if ($(this).attr('hash') !== "") {
       event.preventDefault();
       let hash = $(this).prop('hash');
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){
       });
     }
   });
 });
});


