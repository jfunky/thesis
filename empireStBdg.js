// Thesis animation/call to action: empire state building animation
// by Jasmine Soltani
// Embodied Energy v.2.1

var ESB = function(Empstbdg) {

  // create variables
  let empstbdg, tomato, empstbdg_u, meter ;
  let mW = 18 ;
  let mH = 270 ;

  //tomato
  let tX, tY ;

  //text
  let textY = 40 ;

  //line
  // let x = 110 ;
  let y1 ;
  let y2 ;

  // rising & falling
  let rising ;
  let acc ;

  //empire state building
  let size = 2 ;
  let currentTime, timing ;

  Empstbdg.setup = function() {
    var ecanvas = Empstbdg.createCanvas(300, 450);

    ecanvas.parent('sketch-right');

    // tomato location & size
    tX = 135 ;
    tY = 205 ;
    t2Y = 380 ;
    ts = 80 ;

    //meter
    y1 = 40 ;
    x1 = 50 ;

    //rising & falling
    rising = true ;
    acc = 1 ;

    // empire state building
    // size = 1.9 ;
    size = .001 ;
    eY = 50 ;

    tomato = Empstbdg.loadImage('assets/mytomato.svg');
    empstbdg = Empstbdg.loadImage('assets/myempstbdg.svg');
    empstbdg_u = Empstbdg.loadImage('assets/myempstbdg_u.svg');
    meter = Empstbdg.loadImage('assets/oneMeter.svg');

  };

  Empstbdg.draw = function() {
    Empstbdg.background(255);
    currentTime = Empstbdg.millis();

    // shrink it
    if (mH > 10) {

      // meter size
      y1 += 0.2 ;
      x1 += 0.15 ;
      mW -= .18 ;
      mH -= 2.7 ;

      // empire state building size
      size += 0.003 ;

      Empstbdg.image(meter,x1,y1,mW,mH);
      Empstbdg.image(empstbdg, 110, eY, empstbdg.width*size, empstbdg.height*size)

      timing = Empstbdg.millis() + 1000 ;
    }

    else {
      if (currentTime <= timing) {
        Empstbdg.image(empstbdg, 110, eY, empstbdg.width*size, empstbdg.height*size)
      }
      else if (currentTime > timing) {
        for (var i=0; i < 4; i++ ) {
          Empstbdg.image(empstbdg, 110, ((i * 110) + 53), empstbdg.width*size, empstbdg.height*size)
        }
        for (var i=0; i < 4; i++ ) {
          Empstbdg.image(empstbdg_u, 110, (i * 110), empstbdg_u.width*size, empstbdg_u.height*size)
        }

        // animate tomato
        if (t2Y < 0) {
          rising = false ;
        }
        else if (t2Y > 380) {
          rising = true ;
          acc = .5 ;
        }
        if (rising==true) {
          t2Y -= 1 ;
        }
        if (rising==false) {
          acc = acc * (1.1) ;
          t2Y += acc ;
        }

        Empstbdg.image(tomato, tX, t2Y, 30, 30);
      }
    }
  };
};

var animateESB = new p5(ESB) ;
