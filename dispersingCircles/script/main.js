var app = playground({

  create: function() {
    var element = document.getElementById("myCanvas");
    var context = element.getContext("2d");
  

    var bag = []

    arrayColor=["Aqua","Aquamarine","Azure","Chartreuse",
    "Coral","CornflowerBlue","DarkSalmon","DarkTurquoise",
    "DarkSlateBlue","DeepSkyBlue","HotPink","LavenderBlush",
    "Yellow"]

    function draw(){
       var box = {
          x : 450,
          y : 300,
          xSpeed : randomNum(-1,1),
          ySpeed : randomNum(-1,1),
          size : 25,
          color:arrayColor[randomNum(0,arrayColor.length-1)]
      }
      
      context.clearRect(0,0,1000,1000)
      
      bag.push(box)

      for (var i = bag.length - 1; i >= 0; i--) {
        mybox = bag[i]
        context.fillStyle=mybox.color;
        mybox.x = mybox.x + mybox.xSpeed
        mybox.y = mybox.y + mybox.ySpeed
        mybox.size=mybox.size*0.99
        context.beginPath()
        context.arc(mybox.x,mybox.y,mybox.size,0,2*Math.PI)
        context.fill()
  
      }
   }
   
    setInterval(draw, 30)

  
    function randomNum(min,max){
      return Math.floor(Math.random() * (max-min +1)) +min;
    }









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
