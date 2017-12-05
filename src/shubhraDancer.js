var shubhraDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shubhraDancer"></span>');
  this.setPosition(this.top, this.left);
};

shubhraDancer.prototype = Object.create(makeDancer.prototype);
shubhraDancer.prototype.constructor = shubhraDancer;

shubhraDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};