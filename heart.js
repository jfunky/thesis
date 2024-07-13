// Thesis animation/call to action: heart animation
// by Jasmine Soltani
// Embodied Energy v.2.1

var h = function(Hearts) {

  let heart ;

  let h1Size ;
  let h2Size ;
  let hX, hY ;

  let timing1 = 50 ;
  let timing2 = 70 ;
  let interval = 18 ;

  Hearts.setup = function() {
    var hcanvas = Hearts.createCanvas(280, 100);

    // Move the canvas so it’s inside our <div id="first">.
    hcanvas.parent('first');

    h1Size = 65;
    h2Size = 90 ;
    frames = 0 ;
    hX = hcanvas.width/5.5 ;
    hY = 5 ;

    heart = Hearts.loadImage('assets/myheart.svg');
  };

  Hearts.draw = function() {
    Hearts.background(255);

    frames = frames+=1 ;

    // animate heartbeats
    if ((frames>timing1) && (frames<(timing1+interval))) {
      Hearts.image(heart, hX, hY, h2Size, h2Size);
    }
    else {
      Hearts.image(heart, hX, hY, h1Size, h1Size);
    }
    if ((frames>timing2) && (frames<(timing2+interval))) {
      Hearts.image(heart, hX + 80, hY, h2Size, h2Size);
    }
    else {
      Hearts.image(heart, hX + 80, hY, h1Size, h1Size);
    }

    if (frames > 85){
      frames = 0 ;
    }
  };
};
//
var animateHeart = new p5(h) ;
