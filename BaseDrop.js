class BaseClass {
    constructor (x,y,width,height){
      
       this.body = createSprite(x,y,width,height);
       this.body.velocityY = 40;
       if(this.body.y>200){
       this.body.velocityY = this.body.y*0.15;
       this.body.lifetime = 1;
       this.body.shapeColor = color(0,0,50);
       }
    }
   
   
}