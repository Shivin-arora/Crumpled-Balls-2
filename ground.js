class Ground{

    constructor(x,y,width,height){
    
        var option={
           isStatic : true,
        }
        this.ground = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world, this.ground);
    
    }
    
    
    show(){
    
    push();
    var pos = this.ground.position; 
    var angle = this.ground.angle;
    
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    }