class Bin{

    constructor(x,y,width,height){
    
        var option={
           isStatic:true
        }
        this.bin = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image=loadImage("dustbin.png");
        World.add(world, this.bin);
    
    }
    
    
    show(){
    
    push();
    var pos = this.bin.position; 
    var angle = this.bin.angle;
    
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white");
   rectMode(CENTER);
    rect(0,0,this.width,this.height);
   
    pop();
    }
    pic(){
        imageMode(CENTER);
        image(this.image,675,279,160,160);
    }
    }