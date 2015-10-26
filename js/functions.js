// Main Menu

(function($){
  var $body = $('html, body'),
      $window = $(window),
      $menuLink = $('nav ul li a');

  function firstLinkActive () {
    $menuLink.first().addClass('active');
  }

  function onMenuLinkClick (e) {
    var $this = $(this),
        href = $this.attr('href'),
        $target = $(href);

    if ($target.length == 0)
        return;

    e.preventDefault();

    $body.animate({
        scrollTop: $target.offset().top-50
    }, 300);
  }

  $(document).ready(function(){
    firstLinkActive();
    $('a[href^="#"]').on('click', onMenuLinkClick);
  });

})(jQuery);

// Affix Header

$(window).scroll(function(){
  var wScroll = $(this).scrollTop(),
      $header = $('.main-header'),
      hScroll = $header.scrollTop();

  if(wScroll > (hScroll+80)) {
    $header.addClass('fixed');
  }

  else {
    $header.removeClass('fixed');
  }
});
