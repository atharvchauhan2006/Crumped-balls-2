var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1620, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,2050,20);
	paper = new Paper (260,680,70);
	
	boxbottom = new Box (1480,580,300,250);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    //World.add(world, ground);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(500);
  
  //drawSprites();
  ground.display();
  paper.display();
  boxbottom.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1210,y:-1210});
	}
	if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:-1210,y:1210});
		}
	



}



