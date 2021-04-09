var ball;

// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, myGround;

function setup() {
  createCanvas(600, 600);

  // 1. Create Engine
  myEngine = Engine.create();
  // 2. Use engine to create world
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true,
  };

  var ball_options = {
    restitution: 1,
  };
  // 3. Create the bodies
  myGround = Bodies.rectangle(300, 580, 600, 20, ground_options);
  // 4. Add the body to the world
  World.add(myWorld, myGround);
  // 5. Run the engine
  Engine.run(myEngine);

  ball = Bodies.circle(300, 10, 20, ball_options);
  World.add(myWorld, ball);
}

function draw() {
  background(0);

  console.log(myGround.position);

  rectMode(CENTER);
  rect(myGround.position.x, myGround.position.y, 600, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}
