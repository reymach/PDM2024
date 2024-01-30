function setup() {
  createCanvas(200, 1000);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  //-------------example 1----------------
  rectMode(CENTER);
  noStroke();
  fill(120, 100, 100);
  rect(100, 50, 200, 100);

  strokeWeight(1);
  stroke(0, 0 , 0);
  fill(255);
  circle(50, 50, 80);
  rect(150, 50, 80, 80);

  //-------------example 2-----------------
  noStroke();
  fill(255);
  rect(100, 200, 200, 200);

  fill(0, 100, 100, .35);
  circle(100, 175, 100);

  fill(240, 100, 100, .35);
  circle(70, 230, 100);

  fill(120, 100, 100, .35);
  circle(130, 230, 100);

  //------------example 3------------------
  fill(0);
  rect(100, 350, 200, 100);

  fill(60, 100, 100);
  arc(50, 350, 80, 80, 225, 135);

  fill(0, 80, 100);
  arc(150, 374, 100, 120, 225, 315, CHORD);
  rect(150, 360, 77, 50)

  fill(255);
  circle(135, 350, 20);
  circle(165, 350, 20);

  fill(240, 100, 100);
  circle(135, 350, 12);
  circle(165, 350, 12);

  
  //-----------example 4-------------------
  fill(240, 100, 60);
  rect(100, 500, 200, 200);

  strokeWeight(2.5);
  stroke(255);
  fill(120, 100, 50);
  circle(100, 500, 105);

  strokeWeight(2.5);
  fill(0, 100, 100);
  beginShape();
  vertex(100, 445);
  vertex(112, 485);
  vertex(150, 485);
  vertex(122, 505);
  vertex(135, 540);
  vertex(100, 512);
  vertex(65, 540);
  vertex(78, 505);
  vertex(50, 485);
  vertex(88, 485);
  vertex(100, 445);
  endShape();
  

}
