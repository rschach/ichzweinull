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

// Projects Ajax

(function($) {

  $(document).ajaxStart(function(){
    $('#ajaxBusy').show();
    console.log('ajaxStart');
  }).ajaxStop(function(){
    console.log('ajaxStop');
  });

  function projectLoad() {

    var $this = $(this),
        getProject = $this.find('figcaption').data('project'),
        getHeader  = $this.find('figcaption').data('header'),
        getTitle   = $this.find('h2').text(),
        newProject = 'projects/' + getProject + '.html',
        newHeader  = 'projects/' + getHeader + '.jpg';

    $('.modal-title').text(getTitle);

  
      $('.modal-content').load(newProject);


    $.ajax({
      type: "GET",
      url: newHeader,
      contentType: "image/jpeg",
      success: function(){
      $('.modal-header').html('<img src="' + newHeader + '" />');
      $('.modal-header img').on('load', function() {
        $('#ajaxBusy').fadeOut(300);
        console.log('imageLoaded');
        }).each(function() {
          if(this.complete) $(this).load();
        });},
      });
    }

  function loadingState() {
    $('.modal').append('<div id="ajaxBusy"><img src="img/loader.gif"></div>');
  }

  $(document).ready(function(){
    $('figure').on('click', projectLoad);
    loadingState();
  });

})(jQuery);
