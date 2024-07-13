// Thesis animation: guess how much energy to produce a smartphone
// by Jasmine Soltani
// Q & A v.1.0

  // create variables
  let minute, hour ;

var a = function(Guess) {

  let input, jbutton, wbutton, textQ ;

  Guess.setup = function() {

    // create canvas
    // ** we only need this to put this into the page
    qCanvas = Guess.createCanvas(1, 1);
    qCanvas.parent("how-much");

    input = Guess.select("#amount");

  	//Joules
    jbutton = Guess.select("#joulesButton");
    jbutton.mousePressed(calcjoules);

  	//Watt hours
    wbutton = Guess.select("#watthrButton")
    wbutton.mousePressed(calcwatthrs);

    textQ = Guess.select("#question");
  };

  function calcjoules() {
    var num = parseInt(input.value());

  	if (isNaN(num)){
  		textQ.html("Please enter a number!");
  	}
  	else if (36000000 < num && num < 3600000000){
  		textQ.html("That's about right!");
  	}
  	else {
  		answer = 360000000/num ;
  		textQ.html("That's about "+answer+"x off!");
  	}
    input.value('');
  };

  function calcwatthrs() {
  	var num = parseInt(input.value());

  	if (isNaN(num)){
  		textQ.html("Please enter a number!");
  	}
  	else if (10000 < num && num < 1000000){
  		textQ.html("That's about right!");
  	}
  	else {
  		answer = 100000/num ;
  		textQ.html("That's about "+answer+"x off!");
  	}
  	  input.value('');
  };
};

var askQ = new p5(a) ;
