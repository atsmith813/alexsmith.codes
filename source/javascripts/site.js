$(document).ready(function() {
  // TypeIt
  var type_text = [
    'Hard-working',
    'Genuine',
    'Unanticipated',
    'Smurff',
    'Creative',
    'Honest',
    'Giggly',
    'Driven',
    'Determined',
    'Smart',
    'Blunt',
    'Kind',
    'Loyal',
    'Stubborn',
    'Goofy',
    'Pessimistic',
    'Cheesy',
    'Annoying'
  ];

  new TypeIt('#type-text', {
    strings: type_text,
    breakLines: false,
    lifeLike: true,
    loop: true
  });

  // Scrollbar for side nav
  $('#sidebar').mCustomScrollbar({
    theme: 'minimal'
  });

  // Menu button
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    $(this).toggleClass('active');
  });

  // Hide menu button until page is scrolled
  var navbarCollapse = function() {
    if ($(window).scrollTop() > 150) {
      $('#sidebarCollapse').show();
    } else {
      $('#sidebarCollapse').hide();
    }
  };

  // Hide menu button now if page is at the top
  navbarCollapse();

  // Hide menu button when page is scrolled
  $(window).scroll(navbarCollapse);

  // Closes responsive menu when an item is clicked
  // Adds active class to selected menu item
  $('.nav-item').click(function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $('.navbar-collapse').collapse('hide');
  });


  // Switch headshots on click
  $('#headshot').click(function() {
    var currentPath = $('#headshot').attr('src');

    if (currentPath.includes('pixelized')) {
      $('#headshot').attr('src', '/images/headshot.jpeg')
    } else {
      $('#headshot').attr('src', '/images/alex_smith_pixelized.png')
    }
  })
});
