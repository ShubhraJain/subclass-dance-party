// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span id="carltonDancer"></span>');
  // this.$node = $('<span id="shubhraDancer"></span>');
  this.$node = $('<span class="dancer"></span>');

  // this.$node = $('<span class="shubhraDancerClass"></span>');
  // this.$node = $('<span class="carltonDancerClass"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  
  this.step();
  this.setPosition(this.top, this.left);


  // now that we have defined the dancer object, we can start setting up important parts 
  // of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var usefulWord = this;
  setTimeout(function() {
    usefulWord.step(); 
  }, this.timeBetweenSteps);
  // dancer.step();
};
  


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  // dancer.setPosition(top, left);
};

makeDancer.prototype.lineUp = function () {
  var styleSettings = {
    top: 400
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.down = function () {
  var styleSettings = {
    top: 700
  };
  this.$node.css(styleSettings);
};

