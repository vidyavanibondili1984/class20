var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 90, 50);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  fixedRect=createSprite(200,200,50,90);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor="red";
fixedRect.shapeColor="red";
  }
  console.log();
  console.log()
  drawSprites();
}