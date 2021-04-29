var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
//Calculating time using predefined function from p5.js



}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(270);



  hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60,0 ,360);
  scAngle = map(sc, 0, 60, 0, 360);

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0, 0, 100, 0);
pop();

push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0, 0, 80, 0);
pop();

push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0, 0, 60, 0);
pop();

noFill();
strokeWeight(10);
stroke(255, 0, 0);
arc(0, 0, 300,300, 0, scAngle);

stroke(0,255, 0);
arc(0, 0, 275,275, 0, mnAngle);

stroke(0, 0, 255);
arc(0, 0, 250,250, 0, hrAngle);


  drawSprites();
}