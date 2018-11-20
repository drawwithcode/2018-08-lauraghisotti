var tree;
var star;

function preload(){
  // put preload code here
  tree= loadImage("./assets/xmastree.png");
  star= loadImage("./assets/stella.png");
}

//var value = height/5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background("red");

  // by defaults equals to 30
  setShakeThreshold(30);
  frameRate(12);
  imageMode(CENTER);
push();
  translate(width/2, height/2);
  scale(2);
  image(tree, 0, 0);
  pop();
  push();
  translate(width/2, height/5);
  scale(1.7);
  image(star, 0, 0);
  pop();
  fill(255);
  textSize(66);
  textFont("Amatic SC");
  textAlign(CENTER);
  text("The Grinch needs your help to ruin Christmas!\nTurn your phone down to make the shiny star fall!",width/2,4*height/5)

}

function draw() {
  //background(value);

}

/*function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
    background("black");
    text("Congratulations, the shiny star is gone:\nyou ruined Christmas!", width/2,4*height/5)
  }
}*/

function deviceTurned() {
  if (turnAxis==="X") {
    value = 0;
    background("black");
    imageMode(CENTER);
  push();
    translate(width/2, height/2);
    scale(2);
    image(tree, 0, 0);
    pop();
    push();
    translate(width/2, 9*height/10);
    scale(1.7);
    image(star, 0, 0);
    pop();
    text("Congratulations, the shiny star fell off:\nyou ruined Christmas!", width/2,4*height/5)
  }
}
