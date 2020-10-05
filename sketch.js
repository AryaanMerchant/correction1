var obj2, obj1;
var obj3,obj4;
var FixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  obj2 = createSprite(400, 100, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj1 = createSprite(400, 800,80,30);
  obj1.shapeColor = "green";
   obj1 .debug = true;

  obj1.velocityY = -5;
  obj2.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 // isTouching();
 //bounceOff();


  drawSprites();
}

























