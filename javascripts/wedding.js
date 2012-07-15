(function ($) {
  // hash change handler
  function hashchange () {
    var hash = window.location.hash,
        el = $('ul.tabs [href*="' + hash + '"]'),
        content = $(hash);

    if (el.length && !el.hasClass('active') && content.length) {
      el.closest('.tabs').find('.active').removeClass('active');
      el.addClass('active');
      content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }
  // listen on event and fire right away
  $(window).on('hashchange.skeleton', hashchange);
  hashchange();
  $(hashchange);
})(jQuery);

// slight variant on Chris Coyier's http://css-tricks.com/convert-menu-to-dropdown/
$(document).ready(function() {
  // Create the dropdown bases
  $('<select />').appendTo('.navigation nav div');

  // Create default option "Go to..."
  // $('<option />', {
  //    'selected': 'selected',
  //    'value': '',
  //    'text': 'Go to...'
  // }).appendTo('nav select');
  // Populate dropdowns with the first menu items
  $('.navigation nav li a').each(function() {
    var el = $(this);
    $('<option />', {
        'value'   : el.attr('href'),
        'text'    : el.text()
    }).appendTo('nav select');
  });

  //make responsive dropdown menu actually work
  $('nav select').change(function() {
    window.location = $(this).find('option:selected').val();
  });
});
