var rectA, rectB;
function setup() {
  createCanvas(800,400);
  
  rectA = createSprite(400, 200, 50, 50);
  rectA.shapeColor = "green";
  rectB = createSprite(600, 200, 50, 50); 
  rectB.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  rectB.x = World.mouseX;
  rectB.y = World.mouseY;

  if(isTouching(rectB, rectA)){
    //rectB.shapeColor = "red";
    //rectA.shapeColor = "red";
    bounceOff(rectA,rectB);
 } 
 else{ 
   rectA.shapeColor = "green";
   rectB.shapeColor = "blue";
  }

  drawSprites();

}
