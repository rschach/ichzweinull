// Main Menu

(function($){
  var $body = $('html, body'),
      $window = $(window),
      $menuLink = $('nav ul li a'),
      $menuToggle = $('.menu-toggle'),
      $mainHeader = $('.main-header');

  function onMenuToggleClick (e) {
    $menuToggle.toggleClass('is-open');
    $mainHeader.toggleClass('is-open');
  }

  function onMenuLinkClick (e) {
    var $this = $(this),
        href = $this.attr('href'),
        $target = $(href);

    if ($target.length == 0)
        return;

    e.preventDefault();

    $menuToggle.removeClass('is-open');
    $mainHeader.removeClass('is-open');

    $body.animate({
        scrollTop: $target.offset().top-69
    }, 300);
  }

  $(document).ready(function(){
    $menuToggle.on('click', onMenuToggleClick);
    $('a[href^="#"]').on('click', onMenuLinkClick);
  });

})(jQuery);

// Affix Header

$(window).scroll(function(){
  var wScroll = $(this).scrollTop(),
      $header = $('.main-header'),
      hScroll = $header.scrollTop();

  if(wScroll > (hScroll+50)) {
    $header.addClass('fixed');
  }

  else {
    $header.removeClass('fixed');
  }
});

// Projects
(function($){
  var $body = $('body'),
      $mainHeader = $('.main-header')
      $overlay = $('.overlay'),
      $modal = $('.modal'),
      $close = $('.close');

  function onProjectClick (e) {
    $body.addClass('noscroll');
    $mainHeader.addClass('noscroll');
    $overlay.addClass('is-visible');
    $modal.addClass('is-visible');
    $close.addClass('is-visible');
  }

  function onOverlayClick (e) {
    $body.removeClass('noscroll');
    $mainHeader.removeClass('noscroll');
    $overlay.removeClass('is-visible');
    $modal.removeClass('is-visible');
    $close.removeClass('is-visible');
  }

  $(document).ready(function(){
    $('figure').on('click', onProjectClick);
    $overlay.on('click', onOverlayClick);
    $close.on('click', onOverlayClick);
  });

})(jQuery);
