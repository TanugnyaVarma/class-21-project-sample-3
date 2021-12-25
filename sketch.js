
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground,wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	restitution:0.75,
	friction:0,
	density : 1.2
}

var ground_options={
	isStatic:true
}

	ball = Bodies.circle(200,300,20,ball_options);
	World.add(world,ball);
	

	ground = new Ground(width/2,670,width,10);
	wall1 = new Ground(900,600,10,120);
	wall2 = new Ground(1100,600,10,120);

	rectMode(CENTER);
    ellipseMode(RADIUS);
	
   
  
}


function draw() {
	Engine.run(engine);
	background(0);

	ground.show();
	wall1.show();
	wall2.show();
  

  ellipse(ball.position.x,ball.position.y,20)

 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	  }

	}



