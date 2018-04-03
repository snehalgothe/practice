    element=document.getElementById("demo");
    ctx=element.getContext("2d");

    ctx.font=" bold 17px Regular";
    ctx.fillText("QUOTATION",220,70);
    ctx.font="bold 14px Regular";
    ctx.fillText("Motor Mart India",430,40);

    ctx.font="bold 15px Regular";
    ctx.fillText("Name:",35,140);
    ctx.fillText("Mobile:",35,160);
    ctx.fillText("Email:",35,180);
    ctx.fillText("Address:",35,200);
    ctx.fillText("Vehicle:",35,240);
    ctx.fillText("Date:",350,100);
    ctx.fillText("Ref.No.",350,120);
    ctx.font="italic 15px calibri";
    ctx.fillText("This quotation is issued by Motor Mart India on behalf of Vanisha Honda",70,620);
    ctx.font="14px Regular"
    ctx.fillText("This is electronic quotation, hence no signature required",196,650);
        var quotes = ["Ex Showroom Price", 
                  "Insurance", 
                  "Road Tax", 
                  "Temporary Passing",

                  "Smart Charges",
                  "Handling Charges",
                  "Hypothecation Charges",

                  "Side Stand",
                  "Foot Rest",
                  "Full Body Cover",
                  "Seat Cover",

                  "On Road Price-Cash Purchase",
                  "On Road Price with Finance"];
    x = 110
    y = 260
    cellHeight = 20
    cellWidth = 430
    mark =0
    //table
    for(i = 0; i <quotes.length ; i++) {
      
      if (i==7){
        mark = cellHeight;
      }else if (i==11){
        mark = 2*cellHeight;
      }else if (i==12){
        mark = 3*cellHeight;
      }
      ctx.rect(x,y+i*cellHeight + mark,cellWidth,cellHeight);
      ctx.stroke();

      
    
    } 
