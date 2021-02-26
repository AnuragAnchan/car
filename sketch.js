var car,wall,thickness;
var speed, weight;

function setup() {
  createCanvas(800,400);
 car =createSprite(50, 200, 50, 50);
 wall=createSprite(750,200,60,height/2);
 wall.shapeColor="black"; 
speed=random(1,10);
weight=random(400,1500);
thickness=random(22,83)
}

function draw() {
  background("lightblue"); 
  car.velocityX=speed;
  
 drawSprites();
}
function hasCollided(lcar,lwall){
  carRightEdge=lcar.x +lcar.width;
  wallLeftEdges=lwall.x;
  if(carRightEdge>=wallLeftEdges){
    return true
  }
  return false;
}