$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

/* Code for sticky plugin */

var originalDescription = $('.description').text();
var originalH5 = $('.grid-full h5').text();
var headerHeight = $('header').height();

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.header').on('sticky-start', function(){
   $('.description').html('We build <strong>great</strong> apps!');
});

$('.header').on('sticky-end', function(){
    $('.description').html(originalDescription);
});


$('.work').sticky({
  topSpacing: 64,
  getWidthFrom: '.container',  
  responsiveWidth: true
});

$('.work').on('sticky-start', function(){
  $(this).append('<a href="mailto:madhavisankholkar@yahoo.com" class="email-text">  Email us!</a>');
});

$('.work').on('sticky-end', function(){
  $('.email-text').remove();
});
