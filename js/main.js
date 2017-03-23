/*Main Javascript File*/

  var canvas = document.querySelector('#game_main');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width=0.9*window.innerWidth;
   ctx.canvas.height=0.8*window.innerHeight;
  // BG Canvas

 
  var bg_canvas = document.querySelector('#game_bg');
  var bg_ctx = bg_canvas.getContext('2d');

  bg_canvas.width = window.innerWidth;
  bg_canvas.height = window.innerHeight;
 
  for(i=0;i<10;i++){
     var x=(Math.random()*ctx.canvas.width)+1;
    var y=(Math.random()*ctx.canvas.height)+1;
    
    $cloudgen.drawCloud(ctx,x,y,80,{r:255,g:255,b:255},0.9);
}
 // Game play on mouse clicks too!
  window.addEventListener('mousedown', function(e) {
    mit.ascend();
  }, false);

  window.addEventListener('mouseup', function(e) {
    mit.descend();
  }, false);


  // Game play on touch too!
  window.addEventListener('touchstart', function(e) {
    mit.ascend();
  }, false);

  window.addEventListener('touchend', function(e) {
    mit.descend();
  }, false);


  // ... and keyzz...
  window.addEventListener('keydown', function(e) {

    // Up
    if (e.keyCode === 38) {
      mit.ascend();

      e.preventDefault();
    }
    // Down
    if (e.keyCode === 40) {
      e.preventDefault();
    }

    // Space || Enter
    if (e.keyCode === 32 || e.keyCode === 13) {
      startGame();

      e.preventDefault();
    }

  }, false);

  window.addEventListener('keyup', function(e) {

    if (e.keyCode === 38) {
      mit.descend();

      e.preventDefault();
    }
  }, false);
