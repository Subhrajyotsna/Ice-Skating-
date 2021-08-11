const Engine= Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world;
var bg;
var cgirl,cg;
var array2=[];
function preload() {
  
   
  bg =loadImage('snow2.jpg')
  cg = loadImage('girlcute.png')
}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
   cgirl = createSprite(700, 270, 1, 5);
   cgirl.addImage(cg);
   cgirl.scale = 0.5;
   
  

 
}
function draw() {
  Engine.update(engine);
  background(bg);
  image(bg,200,400,800,400);
 


if (frameCount%5===0) {
  array2.push(new Snow(random(100,800),0,40,40))
}

  for (var i = 0;i<array2.length;i++) {
array2[i].display();

  }
  
  
  drawSprites();
 
}
function keyPressed() {

if (keyCode==LEFT_ARROW){

  cgirl.velocityX = -3;

  
}
if (keyCode==UP_ARROW){

  cgirl.velocityX = 0;

  
}
if (keyCode==RIGHT_ARROW){

  cgirl.velocityX = 3;

  
}

}
