function preload(){
 clouds = loadImage("old_clouds.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Modak")
}

function draw() {
  background(100,100,220);
  seconds = millis()/1000;
 
  
  
  // tint(200,200,250,200)
  image(clouds, 0, 0, windowWidth, windowHeight);
  
  
  
  for (i = 100; i < windowWidth-100; i +=12) {
    for (j = 100; j < windowHeight-100; j += 12){
      
      var change = map(sin(seconds + i/100 * 1), -1, 1, 7, 50)
      var changeColor = map(sin(seconds + i/100 * 1), -1, 1, 7, 50)
      // jiggle = random(0, 10);
      ellipseMode(CORNER);
      noStroke();
      fill(255, changeColor * 5 + 50, 255, 100);
      ellipse(i + change, j + change, 10, 10);
      
      
    }

  }
  
  var slow = map(sin(seconds), -1, 1, 0, 5)
  
  fill(255, 200);
  textSize(60 + slow);
  textAlign(CENTER);
  text("BUSY IS A STATE OF MIND", windowWidth/2 + 10, windowHeight/2 + 40);
  
  
  
}