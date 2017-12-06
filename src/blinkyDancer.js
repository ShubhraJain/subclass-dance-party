var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addClass('animated infinite flip');
  // this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step  
  // behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="blinky-dancer"></span>');
  // this.oldStep = makeBlinkyDancer.step;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  
  var randomColor = function () {
    return Math.floor(Math.random() * 256);
  };
  
  var styleSettings = {
    border: '30px solid rgb(' +
    randomColor() + ',' +
    randomColor() + ',' +
    randomColor() + ')'
  };
  this.$node.css(styleSettings);
};

// class makeBlinkyDancer extends makeDancer {
//   constructor() {
//     super();
//     this.call(this, top, left, timeBetweenSteps);
    
//   }
  

//   // we plan to overwrite the step function below, but we still want the superclass step  
//   // behavior to work,
//   // so we must keep a copy of the old version of this function
//   // this.$node = $('<span class="blinky-dancer"></span>');
//   // this.oldStep = makeBlinkyDancer.step;
// };
// makeBlinkyDancer.prototype.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//   makeDancer.prototype.step.call(this);
//   // oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };