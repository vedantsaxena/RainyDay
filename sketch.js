
var rain;

function setup() {
 var canvas = createCanvas(800,800);
  
}

function draw() {
  background(0); 
  if (frameCount%0.5==0){
   rain = new Rain(random(1,799),-20,random(4,8),random(8,14));
  }
 
  drawSprites();
}