var godown=0,goline=0,goingdown=0,touchdown=0,dollcaught=0,catching,get=0,started=0,coins=20;
var nowmx,nowmy;
var icon_money,bar,promo,instruct,logom,toreba;
var cleared = 0;
var clawx, clawy;
var d1,d1x=300,d1y=630,d1caught=0;
var d2,d2x=400,d2y=630,d2caught=0;
var d3,d3x=150,d3y=630,d3caught=0;
var d4,d4x=590,d4y=630,d4caught=0;
var d5,d5x=945,d5y=630,d5caught=0;
var clawcontrol=300,checkdoll;
var d1already,d2already,d3already,d4already,d5already;
function preload() {

flower=loadImage('images/flower.png');
claw=loadImage('images/claw.png');
d1=loadImage('images/doll1.png');
d2=loadImage('images/doll2.png');
d3=loadImage('images/doll3.png');
d4=loadImage('images/doll4.png');
d5=loadImage('images/doll5.png');
icon_money=loadImage('images/icon_money.png');
bar=loadImage('images/bar.png');
promo=loadImage('images/promo.png');
instruct=loadImage('images/instruct.png');
logo=loadImage('images/logo.png');
toreba=loadImage('images/toreba.png');
}


function setup() {
  var randsize;
  randsize = random (20,60);
  createCanvas(1920,1080);
  background('#FCE3F4');
  for (i=0;i<30;i++){ 
    flower.resize(50,50);
    image(flower,random(width),random(height));
    randsize = random (20,60);
  }
  imageMode(CENTER);
  logo.resize(700,0);
  image(logo,960,540);
}


function draw() {

 //In-Game
  if(cleared==1){
    
    if (clawcontrol==300){
      returning=0;
    }
     if( touchdown==0 && goingdown ==0 && clawcontrol<=1120 && clawcontrol>=150){
        if (keyIsDown(LEFT_ARROW)){
         clawcontrol-=5; 
        }
        if(keyIsDown(RIGHT_ARROW )){
         clawcontrol+=5; 
        }
     }
    if (clawcontrol>=1120) {
      clawcontrol=1120;
    }
    if (clawcontrol<=150) {
      clawcontrol=150;
    }
    background("#FCE3F4");
    if (goingdown==1){
        godown-=5;
        goline=1;  
      
    
    }
    
    if(godown<=-430){
     godown=-430;
     goingdown=0;
     touchdown=1;
     checkdoll=1;
    }
    if (touchdown==1){
      
      if(d1caught==0 && clawcontrol>=295 && clawcontrol<=305){  //checking if doll is caught
        d1caught=1;       
        dollcaught=1; 
        catching=1;
      }
       if(d2caught==0 && clawcontrol>=395 && clawcontrol<=405){  
        d2caught=1;       
        dollcaught=1; 
        catching=2;
      }
       if(d3caught==0 && clawcontrol>=145 && clawcontrol<=155){  
        d3caught=1;       
        dollcaught=1; 
        catching=3;
      }
       if(d4caught==0 && clawcontrol>=590 && clawcontrol<=600){  
        d4caught=1;       
        dollcaught=1; 
        catching=4;
      }
       if(d5caught==0 && clawcontrol>=935 && clawcontrol<=955){  
        d5caught=1;       
        dollcaught=1; 
        catching=5;
      }

        godown+=5;
        goline=1;  

        
      if(godown==0){
        
       touchdown=0; 
      }
     
    }
    
    
    if(clawcontrol<=1120 && clawcontrol>=150){
      clear();  
      background("#FCE3F4"); 
      imageMode(CENTER);
      claw.resize(500,500);
      image(claw,clawcontrol,100-godown);
      
      if (goline==1){
        fill(0);
       rect(clawcontrol-16,0,10,90-godown); 
      }
    }
    if( clawcontrol>=1120){
      fill(0);
       rect(1104,0,10,90-godown);
       image(claw,1120,100-godown); 
      }
    if( clawcontrol<=150){
      fill(0);
       rect(134,0,10,90-godown);
       image(claw,150,100-godown); 
      }
    //props
    strokeWeight(4);
    fill('#32D6C1');
    rect(0,0,50,height);
    rect(1200,0,50,height);
    fill('#116766');
    rect(50,700,1150,700);
    fill(250);
    rect(200,800,250,250);
    bar.resize(500,500);
    image(bar,1000,1000);
    icon_money.resize(400,400);
    image(icon_money,800,800);
    fill('#C4971C');
    textSize(32);
    text(coins,965,875);
    promo.resize(670,1080);
    image(promo,1585,540);
    instruct.resize(400,200);
    image(instruct,980,975);
    toreba.resize(100,100);
    image(toreba,1150,50);
    // DOLLS

    if (d1caught==1 && d1already!=1 ){
      if(dollcaught==1 && catching==1){
      image(d1,d1x,200-godown); 
      }
      
       if( godown==0 ){
         if( random(1,5)>3){
          coins+=10;
         d1already=1;
          get=1;
         dollcaught=0;
         }
         else{
          d1caught=0;
         }
       }
      
      
      
     }
      if (d1caught==0 ){
      image(d1,d1x,d1y);
    }
    
    
    if (d2caught==1   && d2already!=1 ){
      if(dollcaught==1 && catching==2){
    image(d2,d2x,200-godown);  
      }
       if( godown==0){
          if( random(1,5)>3){
            coins+=10;
         d2already=1;
          get=2;
         dollcaught=0;
         }
         else{
          d2caught=0;
         }
       }
      
      }
    if (d2caught==0 ){
    image(d2,d2x,d2y);
    }


  
    if (d3caught==1  && d3already!=1 ){
      if(dollcaught==1 && catching==3){
    image(d3,d3x,200-godown);  
      }
       if( godown==0){
         if( random(1,5)>3){
           coins+=10;
         d3already=1;
          get=3;
         dollcaught=0;
         }
         else{
          d3caught=0;
         }
       }
      
      }
    if (d3caught==0 ){
    image(d3,d3x,d3y);
    }
    
    
    if (d4caught==1 && d4already!=1 ){
      if(dollcaught==1 && catching==4){
    image(d4,d4x,200-godown);  
      }
       if( godown==0){
         if( random(1,5)>3){
           coins+=10;
         d4already=1;
          get=4;
         dollcaught=0;
         }
         else{
          d4caught=0;
         }
       
      }
    }
    if (d4caught==0 ){
    image(d4,d4x,d4y);
    }
    
    
    if (d5caught==1  && d5already!=1){
      if(dollcaught==1 && catching==5){
    image(d5,d5x,200-godown);  
      }
       if( godown==0){
         if( random(1,5)>3){
           coins+=10;
         d5already=1;
          get=5;
         dollcaught=0;
         }
         else{
          d5caught=0;
         }
       }
      
      }
    if (d5caught==0 ){
    image(d5,d5x,d5y);
    }
  //showing the doll that got caught  

      if (get==1){
        image(d1,325,980); 
      }
      if(get==2){
        image(d2,325,980);  
      }
      if(get==3 ){
        image(d3,325,980);  
      }
      if(get==4 ){
        image(d4,325,980);  
      }
      if(get==5 ){
        image(d5,325,980);  
      }

    }
   
  
  
}
function mousePressed(){
  var randsize;
  randsize = random (20,60);
//  flower.resize(randsize,randsize);
   if (cleared==0){
     for (i=0;i<5 ;i++){
 image(flower,mouseX+random(-100,100),mouseY+random(-100,100));
     }
   }

   
}
function keyTyped() {

  if(key=== 's' ){
    clear();
    claw.resize(500,500);
    cleared=1;
  }
  // In-Game
  if(cleared==1){
    if(key==' ' && touchdown==0 && coins>=5 && godown==0){
      goingdown=1;
      coins-=5;

    }
    

  }
}
