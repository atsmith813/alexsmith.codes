$(document).ready(function() {
  // TypeIt
  const TYPE_TEXT = [
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
    strings: TYPE_TEXT,
    breakLines: false,
    lifeLike: true,
    loop: true
  });

  // Switch headshots on click
  const headshot = "/images/headshot_teal_bg.jpg";
  const pixelizedHeadshot = "/images/alex_smith_pixelized.png";
  const winkingPixelizedHeadshot = "/images/alex_smith_wink_pixelized.png";

  $('#headshot').click(function() {
    const currentSrc = $('#headshot').attr('src');
    var newSrc = "";

    if (currentSrc.includes('pixelized')) {
      newSrc = headshot;
    } else {
      newSrc = pixelizedHeadshot;
    }

    $('#headshot').attr('src', newSrc);
  });

  // Wink headshot every 3 seconds on mobile
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    setInterval(winkHeadshot, 3000);
  }

  function winkHeadshot() {
    const currentPath = $('#headshot').attr('src');

    if(currentPath == pixelizedHeadshot) {
      $('#headshot').attr('src', winkingPixelizedHeadshot);
      setTimeout(unwinkHeadshot, 700);
    }
  }

  function unwinkHeadshot() {
    const currentPath = $('#headshot').attr('src');

    if(currentPath == winkingPixelizedHeadshot) {
      $('#headshot').attr('src', pixelizedHeadshot);
    }
  }

  // Wink on hover
  $('#headshot').hover(function() {
    if ($(this).attr('src').includes('pixelized')){
      $(this).attr('src', winkingPixelizedHeadshot);
    }
  }, function () {
    if ($(this).attr('src').includes('wink')){
      $(this).attr('src', pixelizedHeadshot);
    }
  });

  // Active menu item highlighting
  function updateActiveNav(currentHref) {
    $('.navbar a.active').removeClass('active');
    const currentLocation = "/".concat(currentHref.split("/").pop());
    const parentTarget = currentLocation.split("#").shift();
    $('.navbar a[href="' + parentTarget + '"], .navbar a[href="' + currentLocation + '"]').addClass('active');
  }

  $('.navbar a').click(function() {
    updateActiveNav(this.href);
  });

  updateActiveNav(location.href);
});
