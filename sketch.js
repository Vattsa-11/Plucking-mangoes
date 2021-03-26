
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimage;

function preload(){
	boyimage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(width/2,height + 25,width,5);
	tree = new Tree();
	stone = new Stone(160,750);
	sling = new Sling(stone.body,{x:340,y:695});
	mango1 = new Mango(800,500);
	mango2 = new Mango(770,550);
	mango3 = new Mango(830,570);
	mango4 = new Mango(850,660); 
	mango5 = new Mango(900,540);
	mango6 = new Mango(890,570);
	mango7 = new Mango(1000,580);
	mango8 = new Mango(950,570);
	mango9 = new Mango(1100,490);
	mango10 = new Mango(980,420);
	mango11 = new Mango(1150,540);
	mango12 = new Mango(1000,490);
  mango13 = new Mango(750,620);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  image(boyimage,300,725,200,200); 
  
  drawSprites();
  ground.display();
  tree.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);
  detectcollision(stone,mango12);
  detectcollision(stone,mango13);
  //detectcollision(stone,mango14);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(keyCode){
  if(keyCode === 32){
    sling.attach(stone.body);
  }
}  

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r + lstone.r){
       Matter.Body.setStatic(lmango.body,false);
    }
}