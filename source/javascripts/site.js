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
      $('#headshot').attr('src', '/images/headshot.jpeg');
      $('#headshot').attr('title', "Click to see me pixelated! \n\nIf you'd like a pixelated version of yourself, check out @awacatoo on Instagram.");
    } else {
      $('#headshot').attr('src', '/images/alex_smith_pixelized.png');
      $('#headshot').attr('title', "Click to see the real me! \n\nIf you'd like a pixelated version of yourself, check out @awacatoo on Instagram.");
    }
  });

  // Wink headshot every 5 seconds on mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    setInterval(winkHeadshot, 6000);
  }

  function winkHeadshot() {
    var currentPath = $('#headshot').attr('src');

    if(currentPath == '/images/alex_smith_pixelized.png') {
      $('#headshot').attr('src', '/images/alex_smith_wink_pixelized.png');
      setTimeout(unwinkHeadshot, 700);
    }
  }

  function unwinkHeadshot() {
    var currentPath = $('#headshot').attr('src');

    if(currentPath == '/images/alex_smith_wink_pixelized.png') {
      $('#headshot').attr('src', '/images/alex_smith_pixelized.png');
    }
  }
});
