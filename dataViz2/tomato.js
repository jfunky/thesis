// Thesis animation/call to action: tomato animation
// by Jasmine Soltani
// Embodied Energy v.2.2

var t = function(Tomato) {

  // create variables
  let tomato ;
  let meter ;

  let tX, tY;
  let rising ;

  let acc ;

  Tomato.setup = function() {
    tcanvas = Tomato.createCanvas(250, 300);

    // Move the canvas so it’s inside our <div id="second">.
    tcanvas.parent('second');

    tX = 110 ;
    tY = 185 ;
    rising = true ;

    acc = 1 ;

    tomato = Tomato.loadImage('assets/mytomato.svg');
    meter = Tomato.loadImage('assets/oneMeter.svg');
  };

  Tomato.draw = function() {
    Tomato.background(255);

    // animate tomato
    if (tY < 0){
      rising = false ;
    }
    else if (tY > 205){
      rising = true ;
      acc = 1 ;
    }
    if (rising==true) {
      tY -=1 ;
    }
    if (rising==false){
      acc = acc * (1.1) ;
      tY += acc ;
    }

    // replace line with meter stick & eliminate text
    Tomato.image(tomato, tX, tY, 80, 80);
    Tomato.image(meter,90,20,meter.width*1.8,meter.height*1.8);
  };
};

var animateTomato = new p5(t) ;
