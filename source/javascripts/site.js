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

  // Closes responsive menu when an item is clicked
  // Adds active class to selected menu item
  //$('.nav-item').click(function() {
    //$('.nav-item').removeClass('active');
    //$(this).addClass('active');
  //});

  const headshot = "/images/headshot_teal_bg.jpg";
  const pixelizedHeadshot = "/images/alex_smith_pixelized.png";
  const winkingPixelizedHeadshot = "/images/alex_smith_wink_pixelized.png";

  // Switch headshots on click
  $('#headshot').click(function() {
    var currentSrc = $('#headshot').attr('src');
    var newSrc = "";
    var tippyContent = "";

    if (currentSrc.includes('pixelized')) {
      newSrc = headshot;
      tippyContent = "<b>Click to see me pixelized!</b>";
    } else {
      newSrc = pixelizedHeadshot;
      tippyContent = "<b>Click to see the real me!</b>";
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

    if(currentPath == pixelizedHeadshot) {
      $('#headshot').attr('src', winkingPixelizedHeadshot);
      setTimeout(unwinkHeadshot, 700);
    }
  }

  function unwinkHeadshot() {
    var currentPath = $('#headshot').attr('src');

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

  // Tooltip headshot
  const tippyHeadShot = tippy(document.querySelector('#headshot'), {
    interactive: true,
    theme: 'light'
  });
});
