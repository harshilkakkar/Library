var fixedRect, movingRect;


function setup() {
createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "green"
  movingRect.debug = true;
  // movingRect.velocityY = -5;
  // fixedRect.velocityY = 5;
  // movingRect.velocityX = -5;
  // fixedRect.velocityX= 5;
  
   
gameObject1 = createSprite(400,100,50,50);
gameObject1.shapeColor = "green"
gameObject2 = createSprite(300,100,50,50);
gameObject2.shapeColor = "green"
gameObject3 = createSprite(200,100,50,50);
gameObject3.shapeColor = "green"
gameObject4 = createSprite(100,100,50,50);
gameObject4.shapeColor = "green"
}


function draw() {
  background(0,0,0);  
 movingRect.y = World.mouseY; 
 movingRect.x = World.mouseX; 

//  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
//   && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 ){

// // movingRect.velocityX = movingRect.velocityX * -1;
// // fixedRect.velocityX = movingRect.velocityX * -1;

// }

// if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
//   && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){

// movingRect.velocityY = movingRect.velocityY * -1;
// fixedsRect.velocityX = movingRect.velocityX * -1;

// }

if (isTouching(gameObject3, movingRect)){

  
  movingRect.shapeColor = "red"

}



else{


  
  movingRect.shapeColor = "green"



}

drawSprites();
}

