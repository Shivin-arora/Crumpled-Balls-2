class Paper{

    constructor(x,y,r){
    
        var option={
           isStatic : false,
            restitution : 0.3,
            density : 0.5,
            friction :1
        }
        this.paper = Bodies.circle(x,y,r,option);
       this.radius=r;
       
       this.image = loadImage("paper.png");
        World.add(world, this.paper);
    
    }
    
    
    show(){
    
    push();
   var pos = this.paper.position; 
    var angle = this.paper.angle;
    
    translate(pos.x,pos.y);
    rotate(angle);
   // fill("purple");
    imageMode(CENTER);
    image(this.image,0,0,90,90);
    pop();
    }
    
    }