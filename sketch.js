
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,bin1,bin2,bin3,paper;

function preload(){


}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
paper= new Paper(100,360,30);

ground=new Ground(400,370,800,30);
bin1 = new Bin(680,340,150,25);
bin2 = new Bin(600,279,25,150);
bin3 = new Bin(760,279,25,150);
Engine.run(engine);
//console.log(paper);
  
}


function draw() {
	Engine.update(engine);
	//rectMode(CENTER);
  background(130);
  
  drawSprites();
 text(mouseX,200,200);
 text(mouseY,100,200);
//keyPressed();
ground.show();
 //bin1.show(); 
 //bin2.show(); 
 //bin3.show(); 
  paper.show();
  bin2.pic();
}

function keyPressed(){
	if( keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:65,y:-60});

	}
}



