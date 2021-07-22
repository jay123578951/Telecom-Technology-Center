$(function() {
  $('.menu-wrapper').click(function(e) {
    e.preventDefault();

    $('.hamburger-menu').toggleClass('open');
    $('.navbar-nav').slideToggle();
  });
});