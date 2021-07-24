$(function() {
  // 手機選單
  $('.menu-wrapper').click(function(e) {
    e.preventDefault();

    $('.hamburger-menu').toggleClass('open');
    $('.navbar-nav').slideToggle();
  });
  
  // 投件清單日期選擇
  $('#startDate').datepicker();
  $('#endDate').datepicker();
});