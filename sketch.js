const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var ground_Options =  { isStatic: true}

ground = Bodies.rectangle(200,350,400,50,ground_Options);
ball = Bodies.circle(200,80,30);
World.add(world, ground);
World.add(world, ball);

console.log(ground);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30)

  drawSprites();
}