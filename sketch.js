var fixedRect, movingRect;
var ball1, ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball1= createSprite (50,50,50,50);
  ball2= createSprite (240,240,40,40);
  ball1.shapeColor= 'purple';
  ball2.shapeColor= 'purple';
}

function draw() {
  background(0,0,0);  
  ball1.x = World.mouseX;
  ball1.y = World.mouseY;

  if (isTouching (ball1,ball2)){
    ball1.shapeColor= 'black';
ball2.shapeColor= 'black';
} 
 else {
  ball1.shapeColor= 'purple';
  ball2.shapeColor= 'purple'; 
 }
  drawSprites();

}
