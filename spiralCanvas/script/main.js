var app = playground({

  create: function() {  
    element=document.getElementById("demo");
    ctx=element.getContext("2d");


   
    //cos wave
    //    x=0
    // y=300
    // index = 0
    // angle=0
    // frequencyFactor = 0.002
    // multiple=0
    // function draw(){
    //   //ctx.clearRect(0,0,1000,1000);
    
    
    //   y=y+Math.cos(angle);
    //     multiple=(multiple+frequencyFactor)%2;
    //   angle=multiple*Math.PI;
    //   ctx.fillRect(x+index,y,4,4);
    //   index = index +0.3;
    // }

    // setInterval(draw,2);

    height=4
    width=4
    angle=0
      
     i = 0;
    multiple = 0

    function drawSpiral(){
      //ctx.clearRect(0,0,1000,1000);
    //for (var i = 1; i <= 200; i=i+0.01) {      
      i=i+0.1;//radius
      multiple = (multiple+0.01)%2;
      angle= multiple* Math.PI;
      x = i * Math.sin(angle);
      y = i * Math.cos(angle);
      //ctx.fillStyle="red";
      ctx.fillRect(x+600,y+350,width,height);
      if (i > 200){
          // clearInterval(myVar);
      }
    }
    setInterval(drawSpiral,4);
    
  


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
