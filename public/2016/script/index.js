/**
 * index.js
 */

/**
 * 
 */
function createDiv(className, text)
{
  var e = $('<div>');
  e.addClass(className);
  e.text(text);
  return e;
}

/**
 * 
 */
function applyFunc(list, callback)
{
  for (var i=0; i<list.length; i++) {
    callback(list[i],i);
  }
}

/**
 * 
 */
function createCircle(w, h, br, color) {
  var c = createDiv('circle', '');
  c.css({
    width: w + 'px',
    height: h + 'px',
    position: 'absolute',
    'border-radius': br + 'px',
    'background-color': color
  });
  return c;
}

/**
 * 
 */
function createCloud()
{
  var c1 = createCircle(105, 50, 80, '#ababab'),
      c2 = createCircle(50, 50, 50, '#ababab')
        .css({ top: '-15px', left: '15px' }),
      c3 = createCircle(50, 50, 50, '#ababab')
        .css({ top: '15px', left: '15px' }),
      c4 = createCircle(50, 50, 50, '#ababab')
        .css({ top: '-15px', left: '40px' }),
      c5 = createCircle(50, 50, 50, '#ababab')
        .css({ top: '15px', left: '40px' });
  var cloud = createDiv('cloud', '')
        .css({ position: 'relative' })
        .append(c1)
        .append(c2)
        .append(c3)
        .append(c4)
        .append(c5);
  return cloud;
}

/**
 * 
 */
function explosion()
{
  
}

/**
 * 
 */
function splishSplash()
{
  var $obj = $('#splash'),
      window_width = $(window).width(),
      splash_text = 'HackRPI 2015',
      letters = [];
  
  for (var l=0; l<splash_text.length; l++) {
    var e = createDiv('letter', splash_text[l]);
    e.css({ opacity: 0, position: 'absolute' });
    letters.push(e);
    $obj.append(e);
  }
  
  var $bits = $obj.find('.letter'),
      delay = 100;
  applyFunc(letters, function(e) {
    $(e).velocity({
      skewX: 25
    }, { duration: 1 });
  });
  var dist = 0;
  applyFunc(letters, function(e,i) {
    $(e).velocity({
      translateX: dist + 'px',
      opacity: 1,
      skewX: 0
    }, {
      duration: 500,
      delay: delay,
    });
    delay += 30;
    dist += 40;
  });  
  $obj
    .velocity({
      translateX: window_width/2 - splash_text.length*20 + 'px',
    }, {
      duration: 700,
    })
    .velocity({ color: '#962020' }, { duration: 300 })
    .velocity({ color: '#135A5A' }, { duration: 300 })
    .velocity({ color: '#1A781A' }, { duration: 300 })
    .velocity({ color: '#965520' }, { duration: 300 })
    .velocity({ color: '#962020' }, { duration: 300 })
  delay += 700;
  applyFunc(letters, function(e,i) {
    $(e).velocity({
      translateY: '-=10px'
    }, { delay: delay, duration: 100, easing: "easeInOutCubic" })
    .velocity({
      translateY: '+=20px'
    }, { delay: 30, duration: 300, easing: "easeInOutCubic" })
    .velocity({
      translateY: '-=10px'
    }, { delay: 30, duration: 300, easing: "easeInOutCubic" });
    delay += 10;
  });
  
}

// splishSplash();