const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
var xPositions = [100,200];
var yPositions = [0,100];
var umbrella;




function setup() {
  createCanvas(300,400);
  engine=Engine.create();
world=engine.world
umbrella = new Umbrella(20,20);
}
function draw() {
  background("black"); 
  Engine.update(engine);
 for (var i = 0; i < xPositions.length; i++){
  noStroke();
  fill(67 , 0, 212);
  if(yPositions[i] > 400){
    yPositions[i] = 3;
  }
  ellipse(xPositions[i],yPositions[i],10,10);
  yPositions[i]+=random(50)
 }
 umbrella.display();
 
  drawSprites();
}
