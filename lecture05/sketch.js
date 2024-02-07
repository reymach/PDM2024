let soup;

function preload () {
  soup = loadImage("assets/bowl of soup.ong");
}
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(soup, width/2, width/2, 50, 50);
}
