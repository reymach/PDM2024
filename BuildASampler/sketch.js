
let sounds = new Tone.Players ({
  'drumBeat' : "assets/DrumBeat.mp3",
  'gameMusic' : "assets/GameMusic.mp3",
  'magicSpell' : "assets/MagicSpell.mp3",
  'sax' : "assets/Sax.mp3",
  'toyFactory' : "assets/ToyFactory.mp3",
  'victory' : "assets/victory.mp3"
})

let phase = new Tone.Phaser ({
  frequency: 20,
})
let distAmt = new Tone.Distortion(0.5);

let button1, button2, button3, button4, button5, button6; 
let phaserSlider, distSlider

sounds.connect(phase);
phase.connect(distAmt);
distAmt.toDestination();

function setup() {
  createCanvas(400, 400);

  button1 = createButton('Drum Beat');
  button1.position(50, 50);
  button1.mousePressed(() => sounds.player('drumBeat').start());

  button2 = createButton('Game Music');
  button2.position(150, 50);
  button2.mousePressed(() => sounds.player('gameMusic').start());

  button3 = createButton('Magic Spell');
  button3.position(260, 50);
  button3.mousePressed(() => sounds.player('magicSpell').start());

  button4 = createButton('Saxophone');
  button4.position(50, 100);
  button4.mousePressed(() => sounds.player('sax').start());

  button5 = createButton('Toy Factory');
  button5.position(150, 100);
  button5.mousePressed(() => sounds.player('toyFactory').start());

  button6 = createButton('Victory');
  button6.position(260, 100);
  button6.mousePressed(() => sounds.player('victory').start());



  phaserSlider = createSlider(0, 1, 0, 0.05);
  phaserSlider.position(125, 200);
  phaserSlider.mouseMoved (() => phase.frequency.value = phaserSlider.value());

  distSlider = createSlider(0, 1, 0, 0.05);
  distSlider.position(125, 250);
  distSlider.mouseMoved (() => distAmt.distortion = distSlider.value());
}

function draw() {
  background(236, 230, 255);

  textSize(15);
  fill(0);
  text('Phaser', 170, 190);

  text('Distortion', 170, 240);
}
