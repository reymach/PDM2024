
let paintColor = 0

function setup() {
  createCanvas(800, 400);
  background(255);
  colorMode(HSB);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(10);
    stroke(paintColor);
    line(pmouseX, pmouseY, mouseX, mouseY)
  }

   // ------------paint colors-----------------

    //red
    strokeWeight(1);
    stroke(255);
    fill(0, 100, 100);
    square(0, 0, 15);
  
    //orange
    fill(30, 100, 100);
    square(0, 15, 15);
  
    //yellow
    fill(60, 100, 100);
    square(0, 30, 15);
  
    //green
    fill(120, 100, 100);
    square(0, 45, 15);
  
    //light blue
    fill(180, 100, 100);
    square(0, 60, 15);
  
    //dark blue
    fill(240, 100, 100);
    square(0, 75, 15);
  
    //purple
    fill(300, 100, 100);
    square(0, 90, 15);
  
    //brown
    fill(0, 100, 35);
    square(0, 105, 15);
  
    //white
    fill(255);
    square(0, 120, 15);
  
    //black
    fill(0);
    square(0, 135, 15);

  
}

function mouseClicked () {

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 15 && mouseY >= 0) {
      paintColor = color(0, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 30 && mouseY >= 15) {
      paintColor = color(30, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 45 && mouseY >= 30) {
      paintColor = color(60, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 60 && mouseY >= 45) {
      paintColor = color(120, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 75 && mouseY >= 60) {
      paintColor = color(180, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 90 && mouseY >= 75) {
      paintColor = color(240, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 105 && mouseY >= 90) {
      paintColor = color(300, 100, 100);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 120 && mouseY >= 105) {
      paintColor = color(0, 100, 35);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 135 && mouseY >= 120) {
      paintColor = color(255);
    }
  }

  if (mouseX <= 15 && mouseX >= 0) {
    if (mouseY <= 150 && mouseY >= 135) {
      paintColor = color(0);
    }
  }
  
}

