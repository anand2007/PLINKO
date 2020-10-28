const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionsHeight = 300;



function setup() {
  createCanvas(480,630);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(315,630,900,10);

  for(var k=0; k<=width;k = k+80){
    divisions.push(new Division(k, height-divisionsHeight/3,10,divisionsHeight-100));
  }

  for (var j = 40; j<= width; j = j+50 ){
    plinkos.push(new Plinko(j,75));
  }

  for (var q = 15; q<= width-10; q = q+50 ){
    plinkos.push(new Plinko(q,150));
  }
  for (var w = 40; w<= width; w = w+50 ){
    plinkos.push(new Plinko(w,225));
  }
  for (var e = 15; e<= width-10; e = e+50 ){
    plinkos.push(new Plinko(e,300));
  }
  for (var r = 40; r<= width; r = r+50 ){
    plinkos.push(new Plinko(r,375));
  }

  


}

function draw() {
  background("black"); 
  Engine.update(engine); 
  if(frameCount%60 === 0){
    particles.push(new Particle(random(220,260),10,8))

  }
      
  for (var t=0; t<particles.length; t++){
    particles[t].display();
  }

  for (var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for (var q=0; q<plinkos.length; q++){
    plinkos[q].display();
  }
  for (var w=0; w<plinkos.length; w++){
    plinkos[w].display();
  }
  for (var e=0; e<plinkos.length; e++){
    plinkos[e].display();
  }
  for (var r=0; r<plinkos.length; r++){
    plinkos[r].display();
  }

  ground.display();
  drawSprites();
}