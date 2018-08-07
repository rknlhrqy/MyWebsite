
import $ from 'jquery';
window.jQuery = $;
window.$ = $;


$(document).ready(function() {

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  
  /*
   * Special effect using animate.css from
   * https://daneden.github.io/animate.css/
   */
  $('.special-effect-1').waypoint(function (direction) {
    $('.special-effect-1').addClass('animated zoomIn');
  }, {offset: '70%'});
  
  $('.special-effect-2').waypoint(function (direction) {
    $('.special-effect-2').addClass('animated rotateIn');
  }, {offset: '70%'});
  
  $('.special-effect-3').waypoint(function (direction) {
    $('.special-effect-3').addClass('animated bounceInLeft');
  }, {offset: '70%'});

  $('.special-effect-4').waypoint(function (direction) {
    $('.special-effect-4').addClass('animated rubberBand');
  }, {offset: '50%'});  

  $('.special-effect-5').waypoint(function (direction) {
    $('.special-effect-5').addClass('animated rubberBand');
  }, {offset: '50%'});  
  
  $('.special-effect-6').waypoint(function (direction) {
    $('.special-effect-6').addClass('animated rubberBand');
  }, {offset: '50%'});  
  
  $('.special-effect-7').waypoint(function (direction) {
    $('.special-effect-7').addClass('animated rubberBand');
  }, {offset: '50%'});  
  
  $('.special-effect-8').waypoint(function (direction) {
    $('.special-effect-8').addClass('animated rubberBand');
  }, {offset: '50%'}); 
  
  $('.special-effect-9').waypoint(function (direction) {
    $('.special-effect-9').addClass('animated rubberBand');
  }, {offset: '50%'}); 
    
  $('.special-effect-10').waypoint(function (direction) {
    $('.special-effect-10').addClass('animated rubberBand');
  }, {offset: '50%'}); 

  $('.special-effect-11').waypoint(function (direction) {
    $('.special-effect-11').addClass('animated rubberBand');
  }, {offset: '50%'}); 

  $('.special-effect-12').waypoint(function (direction) {
    $('.special-effect-12').addClass('animated rubberBand');
  }, {offset: '50%'}); 

  $('.special-effect-13').waypoint(function (direction) {
    $('.special-effect-13').addClass('animated rubberBand');
  }, {offset: '50%'}); 
});