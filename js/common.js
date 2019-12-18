$(document).ready(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

  Waves.attach('.btn', ['']);
  Waves.init();

  AOS.init({
  duration: 1200,
  });

  $('#icon-scroll').on('click', function () {
      $('html, body').animate({
        scrollTop: $('.section-1').offset().top
      }, 500);
    });

});

