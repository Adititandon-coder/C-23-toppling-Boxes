// NameSpacing or alias or renaming the modules of a library
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, world;
var ground;
var box1, box2;
function setup() {
  createCanvas(1200, 600);

  myEngine = Engine.create();
  console.log("my Engine object", myEngine);

  world = myEngine.world;

  ground = new Ground(600, 580, 1200, 20);

  console.log("ground body", ground);

  box1 = new Box(630, 100, 50, 50);
  box2 = new Box(600, 50, 50, 70);
}

function draw() {
  background("lightblue");

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
}
