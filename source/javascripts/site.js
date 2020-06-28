$(document).ready(function() {
  // TypeIt
  let type_text = [
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

  const headshot = "/images/headshot_teal_bg.jpg";
  const pixelizedHeadshot = "/images/alex_smith_pixelized.png";
  const winkingPixelizedHeadshot = "/images/alex_smith_wink_pixelized.png";

  // Switch headshots on click
  $('#headshot').click(function() {
    let currentSrc = $('#headshot').attr('src');
    let newSrc = "";

    if (currentSrc.includes('pixelized')) {
      newSrc = headshot;
    } else {
      newSrc = pixelizedHeadshot;
    }

    $('#headshot').attr('src', newSrc);
  });

  // Wink headshot every 5 seconds on mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    setInterval(winkHeadshot, 6000);
  }

  function winkHeadshot() {
    let currentPath = $('#headshot').attr('src');

    if(currentPath == pixelizedHeadshot) {
      $('#headshot').attr('src', winkingPixelizedHeadshot);
      setTimeout(unwinkHeadshot, 700);
    }
  }

  function unwinkHeadshot() {
    let currentPath = $('#headshot').attr('src');

    if(currentPath == headshot) {
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
  function updateActiveNav(currentLocation) {
    $('.navbar a.active').removeClass('active');
    let target = "/".concat(currentLocation.split("/").pop());
    $(`.navbar a[href="${target}"]`).addClass('active');
  }

  $('.navbar a').click(function() {
    updateActiveNav(this.href);
  });

  updateActiveNav(location.href);
});
