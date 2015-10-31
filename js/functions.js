// Main Menu

(function($){
  var $body = $('html, body'),
      $window = $(window),
      $menuLink = $('nav ul li a'),
      $menuToggle = $('.menu-toggle'),
      $mainHeader = $('.main-header');

  function firstLinkActive () {
    $menuLink.first().addClass('active');
  }

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
        scrollTop: $target.offset().top-45
    }, 300);
  }

  $(document).ready(function(){
    // firstLinkActive();
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
