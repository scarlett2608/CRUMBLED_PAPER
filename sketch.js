//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
var ground; 
var dustbin1,dustbin2,dustbin3;
var paper;

function setup() {
	//canvas
	createCanvas(800, 700);

    //engine     
	engine = Engine.create();
	world = engine.world;

	//ground
	ground = Bodies.rectangle(400,675,800,100,{isStatic:true});
	World.add(world,ground);

	//paper
	paper = new Paper(150,500,25);

	//dustbin
	dustbin1 = new Dustbin(550,620,200,20);
	dustbin2 = new Dustbin(660,570,20,100);
	dustbin3 = new Dustbin(440,570,20,100);

    //running the engine
	Engine.run(engine);
  
}


function draw() {
	//rect mode
	rectMode(CENTER);

	//background colour
	background('cyan');
	
	//ground
	fill('green')
	stroke('green');
	rect(ground.position.x,ground.position.y,800,100);	

	//display
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}


}



