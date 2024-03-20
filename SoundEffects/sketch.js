
function preload() {
  blaster = loadImage ('assets/blaster.png');
}


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
if (mouseIsPressed === true) {
  background(blaster);
} else if (mouseIsPressed === false) {
  background(100, 100, 255);
  fill(255);
  text('press mouse to use blaster', 150, 200);
}
}

let blasterNoise = new Tone.MembraneSynth()
blasterNoise.type = 'triangle'

let phaser = new Tone.Phaser({
  frequency: 100,
  octaves: 10,
  baseFrequency: 500
})

blasterNoise.connect(phaser);
phaser.toDestination();

function mousePressed() {
  blasterNoise.triggerAttack('e5');
}

function mouseReleased() {
  blasterNoise.triggerRelease();
}
