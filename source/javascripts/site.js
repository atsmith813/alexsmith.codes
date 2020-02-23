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
    var currentSrc = $('#headshot').attr('src');
    var newSrc = "";
    var tippyContent = "";

    if (currentSrc.includes('pixelized')) {
      newSrc = "/images/headshot.jpeg";
      tippyContent = "<p><b>Click to see me pixelated!</b></p><p><em>If you'd like a pixelated image of yourself, check out <a href='https://instagram.com/awacatoo'>@awacatoo</a> on Instagram</em></p>";
    } else {
      newSrc = "/images/alex_smith_pixelized.png";
      tippyContent = "<p><b>Click to see the real me!</b></p><p><em>If you'd like a pixelated image of yourself, check out <a href='https://instagram.com/awacatoo'>@awacatoo</a> on Instagram</em></p>";
    }

    $('#headshot').attr('src', newSrc);
    tippyHeadShot.setContent(tippyContent);
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

  // Wink on hover
  $('#headshot').hover(function() {
    if ($(this).attr('src').includes('pixelized')){
      $(this).attr('src', '/images/alex_smith_wink_pixelized.png');
    }
  }, function () {
    if ($(this).attr('src').includes('wink')){
      $(this).attr('src', '/images/alex_smith_pixelized.png');
    }
  });

  // Tooltip headshot
  const tippyHeadShot = tippy(document.querySelector('#headshot'), {
    interactive: true,
    theme: 'light'
  });
});
