const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plinkos;
var ground
var divisions;
var particles;

function setup() {
  createCanvas(480, 600);
  engine = Engine.create();
  world = engine.world; 

  plinkos = [];
  for(var i = 40; i < width ; i = i + 50){
    for(var k = 0; k < 6; k++){
      var plinko = new Plinko(i, k * 50 + 50);
      plinkos.push(plinko);
    }
  }

  ground = new Ground(240, 580, 480, 15);

  divisions = [];
  for(var i = 0; i <= width; i = i + 80){
    divisions.push(new Divisions(i, 480, 10, 200));
  }

  particles = [];
}

function draw() {
  background('black');  
  Engine.update(engine);

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  ground.display();

  for(var d = 0; d < divisions.length; d++){
    divisions[d].display();
  }

  if(frameCount%60==0){
    particles.push(new Particle(random(230, 250), 5));
  }

  for(var n = 0; n < particles.length; n++){
    particles[n].display();
  }
  
  drawSprites();
}