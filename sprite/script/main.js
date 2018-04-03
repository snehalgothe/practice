var app = playground({

  create: function() {
    var element=document.getElementById("mycanvas");
    var context=element.getContext("2d");
  var img = document.createElement("img");
  img.src = "/sprite/walkingdead.png";
 

  var spriteWidth = 2000;//947;//490; 
  var spriteHeight = 312;//594;//800; 

  cols = 10
  rows = 1

  var width = spriteWidth/cols; 
  var height = spriteHeight/rows; 

  var currentFrame = 0; 
  var frameCount = cols;

  var xCoeff=0;
  var yCoeff=0; 

  var sourceX=0; 
  var sourceY=0;  
  level = 0

  function updateFrame(){
    //Updating the frame index 
    currentFrame = ++currentFrame % frameCount; 

    if (currentFrame == frameCount-1)
        level = ++level % rows;
    //Calculating the x coordinate for spritesheet 
    sourceX = currentFrame * width; 
  }


  var move = 0  
  function play(){
    context.clearRect(0,0,2000,1000);
    //Updating the frame 
    updateFrame();
    //Drawing the image 
    context.drawImage(img,
                  sourceX,
                  sourceY+level*height,
                  width,
                  height,
                  xCoeff,
                  yCoeff,
                  width,
                  height);

    move = (move +10)%2000;
  }  

  setInterval(play, 1000)

    
  },

  ready: function() {

  },

  step: function(delta) {

  },

  render: function(delta) {
      
  },

  mousedown: function(event) {

  },

  mouseup: function(event) {

  },

  mousemove: function(event) {

  },

  keydown: function(event) {

  },

  keyup: function(event) {

  }

});
