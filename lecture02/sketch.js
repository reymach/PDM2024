function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noStroke();
  fill('black')
  circle(150, 150, 100);
  fill(280, 90, 40);
  circle(150, 150, 50);

  strokeWeight(5);
  stroke(280, 90, 40);
  line(200, 200, 400, 400)

  stroke(0);
  strokeWeight(2);
  //alpha values are from 0-1 with 0 being completely translucent
  fill(0, 100, 50, 0.5);
  //noFill();
  arc(300, 300, 200, 200, -45, 90, PIE);

  beginShape();
  vertex(450, 200);
  vertex(500, 50);
  vertex(550, 200);
  vertex(500, 350);
  endShape(CLOSE);
}
