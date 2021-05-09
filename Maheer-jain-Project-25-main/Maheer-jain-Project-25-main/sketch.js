
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const applyForce = Matter.Body.applyForce;
//const Body = Matter.Body;
//const Render = Matter.Render;



var dustbinObj,groundObject	;
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	paper = new Paper(200,450,20);


  
}


function draw() {

  background(230);

Engine.update(engine);
  groundObject.display();
  dustbinObj.display();
  paper.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-70});

  
	}
}