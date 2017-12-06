$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the 'data-dancer-maker-function-name' attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeblinkydancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    //dancer.$node.append('<img src="shubhra dancer.gif">');
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  $('.shubhraDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    dancer.$node.append('<img src="minion.gif">');
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
    
  $('.carltonDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    dancer.$node.append('<img src="carlton.gif">');
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  
  $('.split').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (i % 2 === 0) {
        window.dancers[i].goLeft();
      } else {
        window.dancers[i].goRight();
      }
    }
  });
  
  
  $('.lineUp').on('click', function(event) {
    // window.dancers[0].spin();
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
    window.dancers[0].down();
    // $('window.dancers[0]').addclass('spinner');
    setTimeout(function() {
      window.dancers[0].lineUp();
    }, 2000); 
  });
  
  $('.center').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (i % 4 === 0) {
        window.dancers[i].alignCentrally();
      }
    }
  });
  
  
  
  
  // $('body').on('mouseenter', '.carltonDancer', function() {
  //   $(this).animate({width: '-=50px', height: '-=50px'}, 'fast');
  // }).son('mouseleave', '.carltonDancer', function() {
  //   $(this).animate({width: '+=50px', height: '+=50px'}, 'fast');
  // });
  $('body').on('mouseenter', '.carltonDancer', function() {
    $(this).fadeOut();
  }).on('mouseleave', '.carltonDancer', function() {
    $(this).fadeIn();
  });
});

