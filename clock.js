// Thesis animation: Light bulb + clock
// by Jasmine Soltani
// Clockface animation v.1.0

var c = function(Clock) {

  // create variables
  let minute, hour ;

  Clock.setup = function() {
    ccanvas = Clock.createCanvas(200, 200);

    // Move the canvas so it’s inside our <div id="lightbulb">.
    ccanvas.parent('lightbulb');

    lightbulb = Clock.loadImage('assets/mybulb.svg');

    Clock.angleMode(Clock.DEGREES);
  	minute = 0 ;
  	hour = 0;

  };

  Clock.draw = function() {
    Clock.background(255);

    Clock.image(lightbulb, 60, 0, lightbulb.width, lightbulb.height);

    // rotate pretty fast
  	minute+=2;
  	// hour is 1/12th as fast
  	hour+=(1/6) ;

    // animation minute & hour hands
  	Clock.translate(137,60);
    Clock.stroke(2,43,224);
  	Clock.push();
  	Clock.rotate(minute);
  	Clock.line(0,0,50,0);
  	Clock.pop();

    Clock.stroke(224,2,179);
  	Clock.push();
  	Clock.rotate(hour);
    Clock.line(0,0,30,0);
  	Clock.pop();

  };
};

var animateClock = new p5(c) ;
