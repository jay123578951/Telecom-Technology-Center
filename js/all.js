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

  // 一致性會議 modal
  $('.meeting-modal').click(function() {
    $('#meeting-modal').modal('show')
  })

  // 一致性會議 modal
  $('.seminar-modal').click(function() {
    $('#seminar-modal').modal('show')
  })
});